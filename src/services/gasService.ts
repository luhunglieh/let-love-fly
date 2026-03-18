/**
 * GAS Service
 * Fetches artwork collection status from Google Apps Script.
 */

export interface ArtworkStatus {
  id: number;
  collected: boolean;
}

const GAS_URL = import.meta.env.VITE_GAS_URL;

export async function fetchArtworkStatuses(): Promise<ArtworkStatus[]> {
  if (!GAS_URL) {
    console.warn('VITE_GAS_URL is not defined in environment variables.');
    return [];
  }

  try {
    const response = await fetch(GAS_URL);
    if (!response.ok) {
      throw new Error(`GAS fetch failed with status: ${response.status}`);
    }
    let data;
    const text = await response.text();
    try {
      data = JSON.parse(text);
    } catch (e) {
      console.error('Failed to parse GAS response as JSON. Raw response:', text);
      throw new Error('GAS 回傳格式錯誤 (非 JSON)，請檢查腳本是否正確回傳 ContentService.createTextOutput().setMimeType(ContentService.MimeType.JSON)');
    }
    
    // Support both direct array and { data: [...] } wrapper
    const statuses = Array.isArray(data) ? data : data.data;
    
    if (!Array.isArray(statuses)) {
      console.warn('GAS returned unexpected data format:', data);
      throw new Error('GAS 回傳資料格式不正確 (預期為陣列)');
    }

    return statuses.map((item: any) => ({
      id: Number(item.id),
      collected: String(item.collected).toLowerCase() === 'true' || item.collected === true
    }));
  } catch (error: any) {
    console.error('Error fetching artwork statuses from GAS:', error);
    throw new Error(error.message || '連線至 GAS 失敗');
  }
}
