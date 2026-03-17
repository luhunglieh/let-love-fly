export interface Artwork {
  id: number;
  title: string;
  image: string;
  collected: boolean;
}

export interface Painter {
  id: string;
  name: string;
  shortBio: string;
  fullBio: string;
  education: string[];
  experience: string[];
  artworks: Artwork[];
  avatar: string;
}

export const painters: Painter[] = [
  {
    id: 'antonio',
    name: '蘇一仲',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    shortBio: '自2013年起投入繪畫創作，雖非科班出身，卻以旺盛的熱情與敏銳的藝術直覺，迅速建立個人風格。',
    fullBio: '蘇一仲董事長，彰化鹿港人，現任和泰興業－大金空調會長，亦為台灣企業界的重量級人物。除事業卓然有成，更是一位深具人文涵養與藝術熱情的創作者。空閒時喜愛書法、繪畫、寫作、料理等藝文活動，著有《人生總有酸甜苦辣》、《魔術董事長：要最好，你非變不可》等書，展現其豐富多面的生命樣貌。蘇會長認為創作歷程如人生歷練，分為「茫然、偶然、豁然、果然」四階段，每幅畫作皆蘊含著情感與思想的交織。善於結合東方哲思與西方技法，透過色彩與光影描繪生活的體悟與心靈的風景。其繪畫啟蒙於青年時期，曾受教於旅日名師吳棟材，奠定了紮實基礎。',
    education: [
      '國立政治大學 外交學系',
      '美國聖瑪莉大學（St. Mary’s University）企業管理研究所'
    ],
    experience: [
      '和泰興業股份有限公司 會長',
      '和泰汽車股份有限公司 董事',
      '和安保險代理人股份有限公司 會長',
      '和全保險代理人股份有限公司 會長',
      '國際扶輪3522地區 2010-11年度地區總監'
    ],
    artworks: [
      { id: 1, title: '作品一', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800&auto=format&fit=crop', collected: true },
      { id: 2, title: '作品二', image: 'https://images.unsplash.com/photo-1578301978693-85fa9c026f43?q=80&w=800&auto=format&fit=crop', collected: true },
      { id: 3, title: '作品三', image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?q=80&w=800&auto=format&fit=crop', collected: true },
      { id: 4, title: '作品四', image: 'https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?q=80&w=800&auto=format&fit=crop', collected: true },
      { id: 5, title: '作品五', image: 'https://images.unsplash.com/photo-1582201942988-13e60e4556ee?q=80&w=800&auto=format&fit=crop', collected: false },
      { id: 6, title: '作品六', image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=800&auto=format&fit=crop', collected: false },
    ]
  },
  {
    id: 'willie',
    name: '白文亮',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    shortBio: '以獨特的視角與細膩的筆觸，展現對生命的熱愛與關懷。',
    fullBio: '白文亮，以獨特的視角與細膩的筆觸，展現對生命的熱愛與關懷。透過畫筆，將生活中的點滴轉化為動人的藝術作品，期望透過藝術傳遞正能量。',
    education: [],
    experience: [],
    artworks: [
      { id: 7, title: '作品七', image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop', collected: true },
      { id: 8, title: '作品八', image: 'https://images.unsplash.com/photo-1578301978162-7aae4d755744?q=80&w=800&auto=format&fit=crop', collected: false },
    ]
  },
  {
    id: 'cho',
    name: '卓秀冬',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
    shortBio: '將豐富的情感融入畫布，每一筆都訴說著動人的故事。',
    fullBio: '卓秀冬，將豐富的情感融入畫布，每一筆都訴說著動人的故事。擅長捕捉光影的變化，讓畫作充滿生命力與溫度。',
    education: [],
    experience: [],
    artworks: [
      { id: 9, title: '作品九', image: 'https://images.unsplash.com/photo-1579546929662-711aa81148cf?q=80&w=800&auto=format&fit=crop', collected: false },
    ]
  },
  {
    id: 'hsinlee',
    name: '李昕',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    shortBio: '透過色彩的交響，傳遞溫暖與希望的力量。',
    fullBio: '李昕，透過色彩的交響，傳遞溫暖與希望的力量。作品風格多元，時而奔放，時而內斂，展現豐富的藝術才華。',
    education: [],
    experience: [],
    artworks: [
      { id: 10, title: '作品十', image: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?q=80&w=800&auto=format&fit=crop', collected: true },
    ]
  },
  {
    id: 'huang',
    name: '黃麗香',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    shortBio: '以自然為師，將大地的美好化為永恆的藝術印記。',
    fullBio: '黃麗香，以自然為師，將大地的美好化為永恆的藝術印記。熱愛大自然，經常透過寫生捕捉風景的瞬息萬變。',
    education: [],
    experience: [],
    artworks: [
      { id: 11, title: '作品十一', image: 'https://images.unsplash.com/photo-1577083552792-a0d461cb1dd6?q=80&w=800&auto=format&fit=crop', collected: false },
    ]
  }
];
