export interface Artwork {
  id: number;
  title: string;
  image: string;
  collected: boolean;
  description?: string;
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
    avatar: 'images/painters/antonio.jpg',
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
      { id: 1, title: '靜謐之舞', image: 'https://lh3.googleusercontent.com/sitesv/APaQ0SRdMPsnyQvIx_lJ9L4gXQjFkIucFaCP5PuWtKhMaytHeUEvj-QDhKz6ufgoZdF3MpRF481DsR_zM5-zlvRhhdffGQfBxrHLROZcYwDlAGZSb8Vffpcq62lYe_CjaSGHq5AHUDprYpAr2mLC6DSnR27lM-r2qqXBH35UFHfxkqn02Ea-6vZlz0TuVJtuIVtRpEG0BEtU3rdmw-srlGZrHdcg2otUBpfRWdMeYIY=w1280', collected: true, description: '1.《靜謐之舞》｜2015 水彩｜34*34cm(含框)｜義賣價 NT$13,000\n以細膩的筆觸與層次分明的構圖，描繪出大自然沉靜中的躍動之美。墨色與色彩交織成山石苔蘚的意象，呈現出生命的韻律與時間的流轉。整體畫面既充滿張力又不失安定，令人沉浸於一種深層的寧靜之中，猶如觀一場無聲的自然之舞。' },
      { id: 2, title: '靜謐森林', image: '/images/artworks/art-2.jpg', collected: true, description: '走進這片深邃的林間，仿佛能聽見微風拂過樹梢的沙沙聲。作品以層次豐富的綠色調，描繪了自然界最純粹的安穩感，傳達出一種遠離塵囂、與心靈對話的深刻意境，令人身心沉靜。' },
      { id: 3, title: '流動的色彩', image: '/images/artworks/art-3.jpg', collected: true, description: '色彩如旋律般在畫布上躍動，打破了具象的束縛。這件作品實驗了色彩間的滲透與碰撞，表現出情感的起伏與能量的流動。每一筆都是對生命活力的禮讚，帶給觀者強烈的視覺衝擊。' },
      { id: 4, title: '古鎮印象', image: '/images/artworks/art-4.jpg', collected: true, description: '斑駁的磚牆與石板路，訴說著時光流轉的故事。這幅畫以懷舊的色調勾勒出家鄉古鎮的神韻，捕捉了傳統與現代交匯的溫情瞬間，引領觀者進入一段塵封的記憶旅程，感受文化底蘊。' },
      { id: 5, title: '心靈之窗', image: '/images/artworks/art-5.jpg', collected: false, description: '透過抽象的幾何構圖，探索內在世界的無限可能。畫面中央的明亮色區象徵著智慧與澄明，周邊的陰影則代表著深層的潛意識。作品鼓勵觀者直視內心，在寂靜中尋找真實的自我。' },
      { id: 6, title: '大海的呼喚', image: '/images/artworks/art-6.jpg', collected: false, description: '波濤洶湧的海面與沉穩的礁石形成鮮明對比，展現了大自然的雄渾力量與不屈韌性。冷色調的運用強化了海洋的深邃感，讓人感受到生命的廣闊、無畏與包容，充滿震撼人心的魅力。' },
      { id: 12, title: '午後陽光', image: '/images/artworks/art-1.jpg', collected: false, description: '金色的陽光灑落在窗前，營造出一種優閒自在的午後氛圍。這幅畫特別強調光影的對比效果，透過光線的折射，讓日常物品展現出不平凡的質感與美感，流露出對生活的感悟。' },
      { id: 13, title: '秋意濃', image: '/images/artworks/art-2.jpg', collected: true, description: '楓紅層層，訴說著季節交替的哀愁與浪漫。採用豐富的赭紅與橙黃色系，描繪出深秋季節獨有的滄桑感與豐收感。這不僅是自然風景的紀錄，也是對時光流逝的溫柔感慨，意境優美。' },
      { id: 14, title: '抽象旋律', image: '/images/artworks/art-3.jpg', collected: false, description: '線條交織成網，色彩在縫隙中跳躍，彷彿一場交響樂在畫布上奏響。作者嘗試將聽覺體驗轉化為視覺藝術，透過不規則的噴濺與塗抹，釋放內心深處的情感張力，展現當代藝術精髓。' },
      { id: 15, title: '山居歲月', image: '/images/artworks/art-4.jpg', collected: true, description: '隱居於群山之中，看雲捲雲舒，感悟天人合一的至高境界。作品運用了傳統水墨的意境與西畫的光影，營造出一種空靈幽邃的視覺效果，體現了畫家對簡單生活、清淨心境的嚮往。' },
      { id: 16, title: '花之讚歌', image: '/images/artworks/art-5.jpg', collected: false, description: '盛開的花朵展現出生命最燦爛的一面，色彩鮮明且充滿動感。這幅畫以誇張的手法處理花卉的結構，強調生命的爆發力與張力，傳遞出一種積極向上、擁抱美好的樂觀精神，充滿活力。' },
      { id: 17, title: '夢境邊緣', image: '/images/artworks/art-6.jpg', collected: false, description: '虛實交會的場景，模糊了現實與夢境的界線。畫面中充滿了神祕的符號與柔和的光暈，引導觀者思考存在的本質與潛意識的神祕力量。這是一場關於奇幻想像的視覺慶典，耐人尋味。' },
      { id: 18, title: '都市光影', image: '/images/artworks/art-1.jpg', collected: true, description: '霓虹閃爍的喧囂都市，在畫家的筆下呈現出一種冷峻而迷人的詩意感。藉由玻璃反射與建築輪廓的交錯，捕捉了現代生活中快速、疏離卻又充滿可能的瞬間，展現對都會文明的獨特視角。' },
      { id: 19, title: '時光膠囊', image: '/images/artworks/art-2.jpg', collected: false, description: '這幅作品匯集了許多懷舊的元素，如老式時鐘與舊照片，彷彿將時光凍結在畫布之上。作者透過物體的堆疊與光線的營造，引發觀者對過去歲月的集體共鳴與個人情感的追溯，深沉感人。' },
      { id: 20, title: '自然交響曲', image: '/images/artworks/art-3.jpg', collected: true, description: '山、水、樹、雲在同一空間內和諧共生，譜寫出一曲壯大的自然交響。採用宏大的敘事風格與寬廣的視野，表現出宇宙運行的規律與自然界永恆不滅的美感，讓觀者心胸開闊、深受啟發。' },
      { id: 21, title: '靜物之思', image: '/images/artworks/art-4.jpg', collected: false, description: '平凡的日常器皿，在寂靜的空間中展現出一種禪意之美。作者專注於刻畫物體的質地與空間的溫度，透過簡潔的構圖，引導觀者在微小的細節中發現宇宙的奧秘，感受生命中的平安幸福。' },
      { id: 22, title: '春之覺醒', image: '/images/artworks/art-5.jpg', collected: true, description: '翠綠的嫩芽破土而出，象徵著新生的力量與希望的降臨。畫面色彩明快、筆觸跳躍，將春天的活力表現得淋漓盡致。這是一幅充滿生命喜悅的作品，帶給人無限的勇氣去面對生活的挑戰。' },
      { id: 23, title: '平衡之道', image: '/images/artworks/art-6.jpg', collected: false, description: '透過黑與白的強烈對比，探索宇宙間陰陽調和、剛柔並濟的平衡哲理。極簡的風格中蘊含著深刻的人生智慧，提醒我們在動盪的世界中尋找內心的平靜與和諧，達到身靈合一的境界。' },
      { id: 24, title: '夏日晚霞', image: '/images/artworks/art-1.jpg', collected: true, description: '夕陽西沉之際，天空綻放出如夢如幻的晚霞，渲染了整座山嶺。這幅畫捕捉了自然界最壯麗的謝幕瞬間，寓意著生命在歷經繁華後的圓滿與自得，令人沉醉在色彩的盛宴中，內心平和。' },
      { id: 25, title: '冬日暖陽', image: '/images/artworks/art-2.jpg', collected: false, description: '在寒冷的冬日裡，一抹暖陽顯得格外珍貴。作品以冷暖色調的交織，表現出在逆境中依然保有的溫暖與堅毅。這是不畏艱難、守護希望的視覺寫照，溫潤人心，帶給人持續前行的動力。' },
      { id: 26, title: '禪心', image: '/images/artworks/art-3.jpg', collected: true, description: '化繁為簡，以極少的筆墨勾勒出極大的意境空間。作品體現了禪修的深刻體悟，在空靈中見真章，於無聲處聽驚雷。引導觀者放下執著，回歸初心，在藝術的國度裡獲得最終的寧靜。' },
      { id: 27, title: '生命的脈動', image: '/images/artworks/art-4.jpg', collected: false, description: '線條如同血管般延伸擴張，展現出強勁的生命循環過程。色彩層層堆疊出厚實的質感，仿佛能感受到畫布下心臟跳動的頻率。這是對生命頑強韌性的最高敬意，展現出驚人的表現力。' },
      { id: 28, title: '童年往事', image: '/images/artworks/art-5.jpg', collected: true, description: '色彩斑斕的陀螺與風箏，帶領觀者回到那個純真無邪的童年時光。畫面充滿了溫馨與歡笑，讓人暫時忘卻成人世界的煩惱，重新尋回那顆好奇的心。這是一份送給大人的禮物，提醒要永保真誠。' },
      { id: 29, title: '山河壯麗', image: '/images/artworks/art-6.jpg', collected: false, description: '從高空俯瞰大地的壯闊景觀，江山如畫。採用廣角透視，將地理的雄奇與歷史的厚重融為一體，展現出一種大氣磅礡的格局與胸懷，強烈激發出觀者對這片土地的深厚情感與認同。' },
      { id: 30, title: '永恆的凝視', image: '/images/artworks/art-1.jpg', collected: true, description: '特寫人物的眼神，在那幽深的瞳孔中似乎隱藏著無數的故事。作品精準捕捉了人類最細微的情感變化，讓人感受到超越語言的交流。這是一場靈魂的凝視，在沉靜中展現出人性的光輝與尊嚴。' },
    ]
  },
  {
    id: 'willie',
    name: '白文亮',
    avatar: 'images/painters/willie.jpg',
    shortBio: '以獨特的視角與細膩的筆觸，展現對生命的熱愛與關懷。',
    fullBio: '白文亮，以獨特的視角與細膩的筆觸，展現對生命的熱愛與關懷。透過畫筆，將生活中的點滴轉化為動人的藝術作品，期望透過藝術傳遞正能量。',
    education: [],
    experience: [],
    artworks: [
      { id: 7, title: '生命的躍動', image: '/images/artworks/art-7.jpg', collected: true, description: '這幅畫以大膽的筆觸展現出生命的強度。透過對光影的極致追求，畫家在畫布上建構出一個充滿動感的空間，讓觀者感受到一股不屈不撓的生命能量在其中奔騰。' },
      { id: 8, title: '寧靜午後', image: '/images/artworks/art-8.jpg', collected: false, description: '捕捉了一個平凡夏日午後的靜謐瞬間。畫面色彩柔和，細緻地刻畫了光線穿過窗簾的質感，營造出一種溫馨而寧靜的氛圍，喚起觀者內心深處那份最純粹的平安。' },
      { id: 31, title: '大地之歌', image: '/images/artworks/art-9.jpg', collected: true, description: '山巒起伏，雲霧繚繞，畫家以深沉的色調描繪了大地的雄渾氣魄。這是一首對大自然的禮讚，展現了萬物生生不息的韻律感，帶領觀者進入一個與自然共鳴的崇高境界。' },
      { id: 32, title: '心之風景', image: '/images/artworks/art-10.jpg', collected: false, description: '這是一幅探索內心世界的半抽象作品。透過多變的線條與色彩層次的堆疊，畫家呈現了情感的流動與思緒的交織，邀請觀者一同在畫布上開啟一段尋找自我、與心靈對話的旅程。' },
      { id: 33, title: '永恆的凝視', image: '/images/artworks/art-11.jpg', collected: true, description: '特寫人物的眼神，在那幽深的瞳孔中似乎隱藏著無數的故事。作品精準捕捉了人類最細微的情感變化，讓人感受到超越語言的交流。這是一場靈魂的凝視，在沉靜中展現出人性的光輝。' },
      { id: 34, title: '夢境邊緣', image: '/images/artworks/art-1.jpg', collected: false, description: '模糊了現實與幻想的界線，創造出一個既神祕又迷人的視覺奇觀。畫面中充滿了神祕的符號與柔和的光暈，引導觀者思考存在的本質與潛意識的神祕力量，是一場關於想像力的盛宴。' },
    ]
  },
  {
    id: 'cho',
    name: '卓秀冬',
    avatar: 'images/painters/cho.jpg',
    shortBio: '將豐富的情感融入畫布，每一筆都訴說著動人的故事。',
    fullBio: '卓秀冬，將豐富的情感融入畫布，每一筆都訴說著動人的故事。擅長捕捉光影的變化，讓畫作充滿生命力與溫度。',
    education: [],
    experience: [],
    artworks: [
      { id: 9, title: '花之讚歌', image: '/images/artworks/art-9.jpg', collected: false, description: '盛開的花朵展現出生命最燦爛的一面，色彩鮮明且充滿動感。作品強調生命的爆發力，傳遞出一種積極向上、擁抱美好的樂觀精神，讓觀者感受到大自然賦予的強大治癒力量。' },
      { id: 35, title: '秋意濃', image: '/images/artworks/art-10.jpg', collected: true, description: '楓紅層層，訴說著季節交替的哀愁與浪漫。採用豐富的赭紅與橙黃色系，描繪出深秋季節獨有的滄桑感。這不僅是自然風景的紀錄，也是對時光流逝的溫柔感慨，意境優美深遠。' },
      { id: 36, title: '古鎮印象', image: '/images/artworks/art-11.jpg', collected: false, description: '斑駁的磚牆與石板路，訴說著時光流轉的故事。這幅畫以懷舊的色調勾勒出家鄉古鎮的神韻，捕捉了傳統與現代交匯的溫情瞬間，引領觀者進入一段塵封的記憶旅程，感受文化底蘊。' },
      { id: 37, title: '晨曦之光', image: '/images/artworks/art-1.jpg', collected: true, description: '捕捉了清晨第一縷陽光穿透雲層的瞬間，象徵著生命的希望與起點。透過細膩的筆觸，展現出大地在甦醒時的寧靜與蓬勃活力，讓人感受到萬物復甦的喜悅與對新一天的期待。' },
      { id: 38, title: '靜謐森林', image: '/images/artworks/art-2.jpg', collected: false, description: '走進這片深邃的林間，仿佛能聽見微風拂過樹梢的沙沙聲。作品以層次豐富的綠色調，描繪了自然界最純粹的安穩感，傳達出一種遠離塵囂、與心靈對話的深刻意境，令人身心沉靜。' },
    ]
  },
  {
    id: 'hsinlee',
    name: '李昕',
    avatar: 'images/painters/hsinlee.jpg',
    shortBio: '透過色彩的交響，傳遞溫暖與希望的力量。',
    fullBio: '李昕，透過色彩的交響，傳遞溫暖與希望的力量。作品風格多元，時而奔放，時而內斂，展現豐富的藝術才華。',
    education: [],
    experience: [],
    artworks: [
      { id: 10, title: '流動的色彩', image: '/images/artworks/art-10.jpg', collected: true, description: '色彩如旋律般在畫布上躍動，打破了具象的束縛。這件作品實驗了色彩間的滲透與碰撞，表現出情感的起伏與能量的流動。每一筆都是對生命活力的禮讚，帶給觀者強烈的視覺衝擊。' },
      { id: 39, title: '抽象旋律', image: '/images/artworks/art-11.jpg', collected: false, description: '線條交織成網，色彩在縫隙中跳躍，彷彿一場交響樂在畫布上奏響。作者嘗試將聽覺體驗轉化為視覺藝術，透過不規則的噴濺與塗抹，釋放內心深處的情感張力，展現當代藝術精髓。' },
      { id: 40, title: '心靈之窗', image: '/images/artworks/art-3.jpg', collected: true, description: '透過抽象的幾何構圖，探索內在世界的無限可能。畫面中央的明亮色區象徵著智慧與澄明，周邊的陰影則代表著深層的潛意識。作品鼓勵觀者直視內心，在寂靜中尋找真實的自我。' },
      { id: 41, title: '大海的呼喚', image: '/images/artworks/art-4.jpg', collected: false, description: '波濤洶湧的海面與沉穩的礁石形成鮮明對比，展現了大自然的雄渾力量與不屈韌性。冷色調的運用強化了海洋的深邃感，讓人感受到生命的廣闊、無畏與包容，充滿震撼人心的魅力。' },
      { id: 42, title: '午後陽光', image: '/images/artworks/art-5.jpg', collected: true, description: '金色的陽光灑落在窗前，營造出一種優閒自在的午後氛圍。這幅畫特別強調光影的對比效果，透過光線的折射，讓日常物品展現出不平凡的質感與美感，流露出畫家對生活的細膩感悟。' },
    ]
  },
  {
    id: 'huang',
    name: '黃麗香',
    avatar: 'images/painters/huang.jpg',
    shortBio: '以自然為師，將大地的美好化為永恆的藝術印記。',
    fullBio: '黃麗香，以自然為師，將大地的美好化為永恆的藝術印記。熱愛大自然，經常透過寫生捕捉風景的瞬息萬變。',
    education: [],
    experience: [],
    artworks: [
      { id: 11, title: '自然交響曲', image: '/images/artworks/art-11.jpg', collected: false, description: '山、水、樹、雲在同一空間內和諧共生，譜寫出一曲壯大的自然交響。採用宏大的敘事風格與寬廣的視野，表現出宇宙運行的規律與自然界永恆不滅的美感，讓觀者心胸開闊、深受啟發。' },
      { id: 43, title: '山居歲月', image: '/images/artworks/art-1.jpg', collected: true, description: '隱居於群山之中，看雲捲雲舒，感悟天人合一的至高境界。作品運用了傳統水墨的意境與西畫的光影，營造出一種空靈幽邃的視覺效果，體現了畫家對簡單生活、清淨心境的嚮往與追求。' },
      { id: 44, title: '平衡之道', image: '/images/artworks/art-2.jpg', collected: false, description: '透過黑與白的強烈對比，探索宇宙間陰陽調和、剛柔並濟的平衡哲理。極簡的風格中蘊含著深刻的人生智慧，提醒我們在動盪的世界中尋找內心的平靜與和諧，達到身靈合一的境界。' },
      { id: 45, title: '春之覺醒', image: '/images/artworks/art-3.jpg', collected: true, description: '翠綠的嫩芽破土而出，象徵著新生的力量與希望的降臨。畫面色彩明快、筆觸跳躍，將春天的活力表現得淋漓盡致。這是一幅充滿生命喜悅的作品，帶給人無限的勇氣去面對生活的挑戰。' },
      { id: 46, title: '夏日晚霞', image: '/images/artworks/art-4.jpg', collected: false, description: '夕陽西沉之際，天空綻放出如夢如幻的晚霞，渲染了整座山嶺。這幅畫捕捉了自然界最壯麗的謝幕瞬間，寓意著生命在歷經繁華後的圓滿與自得，令人沉醉在色彩的盛宴中，內心平和。' },
    ]
  }
];
