/**
 * GAS Service
 * Fetches artwork collection status from Google Apps Script.
 * Enhanced with 5s timeout protection and 30s in-memory TTL caching
 * to prevent connection hanging, quota exhaustion, and UI lockup.
 */

export interface ArtworkStatus {
  id: number;
  collected: boolean;
}

const GAS_URL = import.meta.env.VITE_GAS_URL;

// In-memory TTL Cache (30s)
let cachedStatuses: ArtworkStatus[] | null = null;
let lastFetchTime = 0;
const CACHE_TTL_MS = 30_000;

export async function fetchArtworkStatuses(): Promise<ArtworkStatus[]> {
  if (!GAS_URL) {
    console.warn('VITE_GAS_URL is not defined in environment variables.');
    return [];
  }

  // 1. Return fresh in-memory cache if within TTL to protect GAS quota
  const now = Date.now();
  if (cachedStatuses && now - lastFetchTime < CACHE_TTL_MS) {
    return cachedStatuses;
  }

  try {
    // 2. Fetch with 5s timeout protection (prevents indefinite UI hanging)
    const response = await fetch(GAS_URL, {
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
      throw new Error(`GAS fetch failed with status: ${response.status}`);
    }

    let data: unknown;
    const text = await response.text();
    try {
      data = JSON.parse(text);
    } catch {
      console.error('Failed to parse GAS response as JSON. Raw response:', text);
      throw new Error('GAS 回傳格式錯誤 (非 JSON)，請檢查腳本是否正確回傳 ContentService.createTextOutput().setMimeType(ContentService.MimeType.JSON)');
    }

    // Support both direct array and { data: [...] } wrapper
    const rawList = Array.isArray(data)
      ? data
      : (data && typeof data === 'object' && 'data' in data && Array.isArray((data as any).data))
      ? (data as any).data
      : null;

    if (!rawList) {
      console.warn('GAS returned unexpected data format:', data);
      throw new Error('GAS 回傳資料格式不正確 (預期為陣列)');
    }

    const statuses: ArtworkStatus[] = rawList
      .filter((item: any) => item && typeof item === 'object' && item.id !== undefined)
      .map((item: any) => ({
        id: Number(item.id),
        collected: String(item.collected).toLowerCase() === 'true' || item.collected === true,
      }));

    // Update in-memory cache
    cachedStatuses = statuses;
    lastFetchTime = now;

    return statuses;
  } catch (error: any) {
    console.error('Error fetching artwork statuses from GAS:', error);
    // Graceful fallback to stale cache on network glitch or timeout
    if (cachedStatuses) {
      console.warn('Using stale cached artwork statuses due to fetch failure.');
      return cachedStatuses;
    }
    throw new Error(error.message || '連線至 GAS 失敗');
  }
}
