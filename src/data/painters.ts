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
    avatar: 'images/painters/painter-1.png',
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
      { id: 1, title: '靜謐之舞', image: 'images/artworks/art-1.jpg', collected: true, description: '1.《靜謐之舞》｜2015 水彩｜34*34cm(含框)｜義賣價 NT$13,000\n以細膩的筆觸與層次分明的構圖，描繪出大自然沉靜中的躍動之美。墨色與色彩交織成山石苔蘚的意象，呈現出生命的韻律與時間의流轉。整體畫面既充滿張力又不失安定，令人沉浸於一種深層的寧靜之中，猶如觀一場無聲的自然之舞。' },
      { id: 2, title: '淡墨魚影', image: 'images/artworks/art-2.jpg', collected: true, description: '2.《淡墨魚影》｜2015 水彩｜29*34cm(含框)｜義賣價 NT$13,000\n用淡墨與暈染的水墨技法，勾勒出魚游水間的靈動姿態。畫面極簡卻富含詩意，魚影若隱若現，彷彿在無聲中傳遞自然的柔和與靜謐。墨色層次微妙，留白處更顯示水的深遠，讓人沉醉於一種近乎禪意的視覺沈思。' },
      { id: 3, title: '引領潮流', image: 'images/artworks/art-3.jpg', collected: true, description: '3.《引領潮流》｜2014 水彩｜25*35cm(含框)｜義賣價 NT$13,000\n以躍動的魚群象徵凝聚與前行的力量。墨色勾勒魚形，淡藍渲染水波，畫面中魚群依循水勢前進，其中一尾領頭魚鮮明突出，寓意帶領群體突破浪潮、勇往直前。整體風格靈動自然，傳達出一種團結、引領與突破的藝術意涵。' },
      { id: 4, title: '事事如意', image: 'images/artworks/art-4.jpg', collected: true, description: '4.《事事如意》｜2015水彩｜25*35cm(含框)｜義賣價 NT$13,000\n以三顆圓潤飽滿的柿子入畫，色彩溫暖鮮明，象徵豐收與圓滿。柿子諧音「事」，寓意萬事皆順、吉祥如意。畫中筆墨間蘊含祝福意涵，搭配書法題字與落款，使整幅作品不僅具視覺美感，更富文化底蘊與祝願之情。' },
      { id: 5, title: '海韻悠揚', image: 'images/artworks/art-5.jpg', collected: true, description: '5.《海韻悠揚》｜2015 水彩｜23*34cm(含框)｜義賣價 NT$13,000\n以流動的筆觸捕捉海浪翻湧之勢，藍墨暈染間層次分明，海面波動如樂章起伏，展現大自然的律動與生命力。畫面廣闊靜謐，天海相連，傳遞出一種內在沉靜與遼闊心境，如詩如歌，令人心神悠揚。' },
      { id: 6, title: '花瓣輕舞', image: 'images/artworks/art-6.jpg', collected: true, description: '6.《花瓣輕舞》｜2015 水彩｜24*34cm(含框)｜義賣價 NT$13,000\n以水墨暈染呈現盛開花朵的律動之美，輕盈的色彩彷彿花瓣在春風中翩然起舞。粉彩點點如晨露凝光，墨韻層層交織出生命的柔和與堅韌。畫面空靈脫俗，帶來一份安然與欣悅，猶如一場靜靜綻放的心靈饗宴。' },
      { id: 12, title: '花舞墨韻', image: 'images/artworks/art-12.jpg', collected: true, description: '7.《花舞墨韻》｜2015 水彩｜34*34cm(含框)｜義賣價 NT$13,000\n透過水墨與綠彩的巧妙結合，描繪出一株盛開花樹隨風搖曳的姿態。畫面層次分明，花團若舞，墨韻悠揚，既見自然之生機，也蘊含東方藝術的詩意節奏。整體意境清新脫俗，讓人沉浸在花影墨香交織的靜謐世界中。' },
      { id: 13, title: '長袖善舞', image: 'images/artworks/art-13.jpg', collected: true, description: '8.《長袖善舞》｜2014 水彩｜34*34cm(含框)｜義賣價 NT$13,000\n描繪一株枝葉婆娑、姿態曼妙的古樹，如舞者長袖翻飛，姿韻悠揚。畫面墨彩交錯、動靜相生，展現自然的生命力與藝術的韻律感。作品不僅展現畫者筆墨功力，更傳遞出從容自在、優雅圓融的人文精神。' },
      { id: 14, title: '酋長', image: 'images/artworks/art-14.jpg', collected: true, description: '9.《酋長》｜2015水彩｜24*34cm(含框)｜義賣價 NT$13,000\n以濃墨密筆堆疊出如雕塑般堅實的人像意象，象徵著部族領袖的沉穩與智慧。筆勢奔放而內斂，色彩厚重卻層次分明，呈現出強烈的文化精神與生命力量。作品不僅是視覺的表現，更是一種精神圖騰的凝視，引領觀者感受原始與靈性的對話。' },
      { id: 15, title: '人群', image: 'images/artworks/art-15.jpg', collected: true, description: '10.《人群》｜2015 水彩｜29*31cm(含框)｜義賣價 NT$13,000\n以強烈色塊與抽象筆觸描繪出一片熙攘的群像場域，紅與黑交織，如同情緒與現實的交戰。觀者可在畫面中感受到群體中的動勢，也能從中尋找個體存在的痕跡。作品傳遞出現代社會的節奏感與人我之間的微妙關係，引人深思其背後的文化與情感脈絡。' },
      { id: 16, title: '時光漫遊', image: 'images/artworks/art-16.jpg', collected: true, description: '11.《時光漫遊》｜2015 水彩｜34*34cm(含框)｜義賣價 NT$13,000\n運用黑與藍色塊的抽象堆疊，呈現時間在心靈中流轉的痕跡。左側如過去的沉積，右側如夢境般的開展，兩者之間無聲交融，彷彿在訴說一段靜靜流動的記憶旅程。作品富有沉思的空間，引人進入一場無聲的時光對話。' },
      { id: 17, title: '時空交錯', image: 'images/artworks/art-17.jpg', collected: true, description: '12.《時空交錯》｜2016 壓克力顏料｜29*62cm(含框)｜義賣價 NT$20,000\n以曲線與色塊的奔放交疊，展現出時間與空間在視覺中的動態交會。畫面中橘與藍、深與淺的對比營造出強烈節奏感，彷彿記憶與未來在此交錯迴旋。作品引領觀者思索生命旅程中的縱橫交織，在抽象之中感受宇宙律動的共鳴。' },
      { id: 18, title: '都市交響曲', image: 'images/artworks/art-18.jpg', collected: true, description: '13.《都市交響曲》｜2016 壓克力顏料｜30*62cm(含框)｜義賣價 NT$20,000\n以繽紛的幾何色塊編織出繁忙城市的視覺樂章。橙黃與紅綠交錯，如同城市中的建築、街道與燈火，彼此碰撞、協奏出生活的節奏。作品充滿動感與層次，猶如一首關於都會節奏、夢想與秩序交織的交響詩，引人共鳴。' },
      { id: 19, title: '映紅之夢', image: 'images/artworks/art-19.jpg', collected: true, description: '14.《映紅之夢》｜2021壓克力顏料｜64*97cm(含框)｜義賣價 NT$33,000\n以奔放的紅色為基調，穿插墨線與淡彩的錯落結構，呈現出夢境中情緒湧動的畫面感。整體畫面如火焰翻舞、似花瓣綻放，亦如思緒翻騰的內在風景。抽象中見韻律，混沌中顯張力，是一場關於記憶與感官交錯的視覺夢旅。' },
      { id: 20, title: '光之旋律', image: 'images/artworks/art-20.jpg', collected: true, description: '15.《光之旋律》｜2021 壓克力顏料｜64*97cm(含框)｜義賣價 NT$33,000\n透過金黃與墨色的強烈對比，營造出一種流動的能量感。層疊的線條如旋律般穿梭畫面，節奏明快、韻律分明，象徵光的閃耀與生命的躍動。作品充滿動感與張力，如同捕捉住一段閃耀瞬間所編織的視覺交響曲。' },
      { id: 21, title: '上道', image: 'images/artworks/art-21.jpg', collected: true, description: '16.《上道》｜2024 墨寶｜50*95cm(含框)｜義賣價 NT$10,000\n《上道》二字運筆穩健有力，筆鋒轉折之間透出書者的自信與內斂修為。字義高遠，寓意行事合於天理、處世循大道，展現修為品格之志向。全作氣勢沉穩，兼具書法美學與哲理意涵，既為視覺作品，更為精神寄語。' },
      { id: 22, title: '和諧', image: 'images/artworks/art-22.jpg', collected: true, description: '17.《和諧》｜2024 墨寶｜50*84cm(含框)｜義賣價 NT$10,000\n《和諧》二字書寫自然奔放、氣韻生動，筆勢中蘊含剛柔並濟之美。作品傳遞出以和為貴、共生共融的思想內涵，象徵平衡、共處與心靈的平和。觀之如沐春風，不僅賞心悅目，更發人深省，為書藝與哲理的完美結合。' },
      { id: 23, title: '應無所住', image: 'images/artworks/art-23.jpg', collected: true, description: '18.《應無所住》｜2024 墨寶｜50*84cm(含框)｜義賣價 NT$10,000\n《應無所住》出自《金剛經》，意指心無執著、不住於相，是通往智慧與自在的修行之道。此書作筆勢雄健、結構嚴謹，墨色層次分明，筆筆見心。書者透過文字揮灑出禪意與哲理，觀之令人心境澄明，頓感安然，是一幅兼具藝術美與佛學思維的佳作。' },
      { id: 24, title: '正向', image: 'images/artworks/art-24.jpg', collected: true, description: '19.《正向》｜2024 墨寶｜50*85cm(含框)｜義賣價 NT$10,000\n《正向》二字書寫氣勢磅礡，筆劃之間充滿力量與信念，傳遞出積極、樂觀的人生態度。作品不僅彰顯書法之美，更如心靈箴言，鼓舞人們在困境中堅定前行、保持正念。是觀賞與激勵並重的精神佳作。' },
      { id: 25, title: '超我服務', image: 'images/artworks/art-25.jpg', collected: true, description: '20.《超我服務》｜2024 墨寶｜50*85cm(含框)｜義賣價 NT$10,000\n《超我服務》以鏗鏘有力的筆觸，傳遞出超越自我、利他為本的價值信念。四字筆勢穩健，章法自然，展現出書者對理想精神的深刻體悟與堅定意志。此作不僅為書法藝術的體現，更為奉獻精神的具象化表達，極具啟發性與象徵意義。' },
      { id: 26, title: '應無所住，無住生心', image: 'images/artworks/art-26.jpg', collected: true, description: '21.《應無所住，無住生心》｜2024 墨寶｜50*106cm(含框)｜義賣價 NT$10,000\n《應無所住，無住生心》出自《金剛經》核心章句，闡述「不執著於一切境相，方能生起圓融清淨之心」的修行智慧。書者以沉著穩健的筆觸，將禪理轉化為具象書藝，八字佈局分明、氣韻流動，在厚實與空靈之間達到巧妙平衡。墨色層次變化中，流露出一份靜謐與通透的精神境界。' },
      { id: 27, title: '興利', image: 'images/artworks/art-27.jpg', collected: true, description: '22.《興利》｜2024 墨寶｜50*95cm(含框)｜義賣價 NT$10,000\n《興利》二字書寫樸實有力，筆鋒沉穩中帶有昂揚之氣，傳遞出造福群體、推動發展的仁政思想。此語源於「興利除弊」，強調在發展中顧及公益與正道，也傳遞出一種以利濟人、利他為本的價值理念。' },
      { id: 28, title: '精進', image: 'images/artworks/art-28.jpg', collected: true, description: '23.《精進》｜2024 墨寶｜50*86cm(含框)｜義賣價 NT$10,000\n《精進》二字直書而下，筆鋒圓潤中見剛勁，顯示書者深厚功底與內斂心性。此作寓意深遠，不僅為修行者的自我勉勵，更體現服務、行動與學習之道，對個人修為與集體願景的高度凝練。' },
      { id: 29, title: '必勝', image: 'images/artworks/art-29.jpg', collected: true, description: '24.《必勝》｜2024 墨寶｜50*106cm(含框)｜義賣價 NT$10,000\n《必勝》一作，以雄渾筆力展現堅毅信念，墨色濃重而不失靈動，書者下筆果斷、氣貫筆端，體現出內在精神的爆發力。作品寓意積極進取、不畏艱難、堅信終將成功。' },
      { id: 30, title: '積極', image: 'images/artworks/art-30.jpg', collected: true, description: '25.《積極》｜2024 墨寶｜50*86cm(含框)｜義賣價 NT$10,000\n《積極》一作，以堅定筆觸書寫出自我超越與奮進不懈的精神內涵。書者運筆穩健、結構勻稱，寓意穩紮穩打、厚積而發，展現一種從容而堅毅的力量。' },
    ]
  },
  {
    id: 'willie',
    name: '白文亮',
    avatar: 'images/painters/painter-2.png',
    shortBio: '以獨特的視角與細膩的筆觸，展現對生命的熱愛與關懷。',
    fullBio: '白文亮，以獨特的視角與細膩的筆觸，展現對生命的熱愛與關懷。透過畫筆，將生活中的點滴轉化為動人的藝術作品，期望透過藝術傳遞正能量。',
    education: [],
    experience: [],
    artworks: [
      { id: 7, title: '夏季麥田', image: 'images/artworks/art-7.jpg', collected: true, description: '1.《夏季麥田》｜2022 油畫｜71.5*64cm(含框)｜義賣價 NT$25,000\n金黃麥浪隨風翻滾，如大地溫柔的呼吸，展現出夏日的熱情與希望。湛藍天空與金色麥田交織出詩意畫面，融合印象派光影與表現主義情感，散發出動靜交錯的生命力。' },
      { id: 8, title: '紅花綠葉', image: 'images/artworks/art-8.jpg', collected: true, description: '2.《紅花綠葉》｜2023 油畫｜71.5*64cm(含框)｜義賣價 NT$25,000\n蓮花含苞待放，象徵希望與未來。厚實筆觸中，粉色花苞與層層綠葉在灰調背景中優雅綻放，畫面流露自然靜謐與生命韌性的共鳴。' },
      { id: 31, title: '季節之路', image: 'images/artworks/art-31.jpg', collected: true, description: '3.《季節之路》｜2021 油畫｜71.5*64cm(含框)｜義賣價 NT$25,000\n秋風輕拂，落葉鋪地，小徑蜿蜒如記憶的引線。畫面融入光影與情感，傳遞季節更迭的細膩情緒，讓人彷彿走進畫家心靈的深處。' },
      { id: 32, title: '台灣的春夏秋冬', image: 'images/artworks/art-32.jpg', collected: true, description: '4.《台灣的春夏秋冬》｜2025 油畫｜71.5*64cm(含框)｜義賣價 NT$25,000\n以四季為筆，描繪台灣自然風貌：陽明山海芋、向陽向日葵、太麻里金針花、合歡山初雪。色彩明快、節奏分明，如詩如歌，唱出島嶼的四季輪迴與深情。' },
      { id: 33, title: '午後的靜謐', image: 'images/artworks/art-33.jpg', collected: true, description: '5.《午後的靜謐》｜2023 油畫｜71.5*64cm(含框)｜義賣價 NT$25,000\n陽光灑落，樹影婆娑，午後靜謐氣息流轉。畫面中印象派筆觸與情感投射交織，邀觀者放慢腳步，與自然共呼吸、共靜心。' },
      { id: 34, title: '重生的綠意', image: 'images/artworks/art-34.jpg', collected: true, description: '6.《重生的綠意》｜2023 油畫｜71.5*64cm(含框)｜義賣價 NT$25,000\n冬日悄然離去，大地換上嶄新綠裝。嫩葉閃爍著朝氣蓬勃的光芒，彷彿在低語：「一切都能重新開始。」韻意生命的活力，象徵著無限可能。' },
    ]
  },
  {
    id: 'cho',
    name: '卓秀冬',
    avatar: 'images/painters/painter-3.png',
    shortBio: '將豐富的情感融入畫布，每一筆都訴說著動人的故事負責。',
    fullBio: '卓秀冬，將豐富的情感融入畫布，每一筆都訴說著動人的故事。擅長捕捉光影的變化，讓畫作充滿生命力與溫度。',
    education: [],
    experience: [],
    artworks: [
      { id: 9, title: '春夜洛城聞笛', image: 'images/artworks/art-9.jpg', collected: true, description: '1.《春夜洛城聞笛》｜墨寶作品｜長軸 135*34cm | 義賣價 NT$10,000元\n書寫唐代詩人李白名作，詩中笛聲如春風入城，激起濃濃思鄉情懷。作品筆法穩健，結構嚴謹，展現書者深厚功力與人文修養。以行楷書體書寫，氣韻婉轉，情境悠遠。' },
      { id: 35, title: '真 善 美', image: 'images/artworks/art-35.jpg', collected: true, description: '2.《真 善 美》| 六書古體墨寶｜40*66.5cm | 義賣價 NT$10,000元\n以古文字筆意書寫「真、善、美」，結構穩重對稱，筆畫厚重含蓄，呈現古樸精神與人文意涵。全作運用六書造字法則，展現漢字之美與哲理之深，蘊含教育與藝術融合之道。本系列共兩件，本件為第二作，另一件已典藏於台北市政府蔣市長手中。' },
      { id: 36, title: '堅持', image: 'images/artworks/art-36.jpg', collected: true, description: '3.《堅持》｜瓷板書法作品｜33.5*33.5cm | 義賣價 NT$15,000元\n書寫於高溫燒製瓷板之上，字體遒勁有力，氣韻流暢，展現堅定不移之精神。本作為作者與旅紐書畫藝術家溫憲麒老師（李奇茂大師弟子）攜手創作，設計與手工製作皆精細用心。瓷板經1300°C高溫燒成，字跡分毫不走樣，工藝難度高，實屬難得之雙人合作墨寶。合作創作：卓秀冬 × 溫憲麒。' },
      { id: 37, title: '生命多美好・綻', image: 'images/artworks/art-37.jpg', collected: true, description: '4.《生命多美好・綻》｜油畫作品｜46*58cm |  義賣價 NT$20,000元\n色彩層疊奔放，如花朵在心中綻放，象徵生命的韌性與美好。作品運用多層次肌理與大膽色塊交織，展現內在情感的自然流動與爆發張力。抽象構圖中透出希望與祝福，是一件充滿正能量的藝術創作。' },
      { id: 38, title: '生命多美好・靈動', image: 'images/artworks/art-38.jpg', collected: true, description: '5.《生命多美好・靈動》｜油畫作品｜46*58cm | 義賣價 NT$20,000元\n色彩奔放如詩意湧動，筆觸律動展現生命之靈光。全作以強烈對比與肌理交錯構成視覺節奏，傳遞一種如音符流轉般的生命能量。畫面如風拂草原、如心靈之舞，象徵希望與創造力無限綻放。' },
    ]
  },
  {
    id: 'hsinlee',
    name: '李昕',
    avatar: 'images/painters/painter-4.png',
    shortBio: '透過色彩的交響，傳遞溫暖與希望的力量。',
    fullBio: '李昕，透過色彩的交響，傳遞溫暖與希望的力量。作品風格多元，時而奔放，時而內斂，展現豐富的藝術才華。',
    education: [],
    experience: [],
    artworks: [
      { id: 10, title: '他聲音如催眠的風', image: 'images/artworks/art-10.jpg', collected: true, description: '1. 他聲音如催眠的風\n尺寸 21x30cm(連框:34.5x43cm) \n複合多媒材\n年份 2024\n義賣價 NT$25,000元' },
      { id: 39, title: '她在天堂重生', image: 'images/artworks/art-39.jpg', collected: true, description: '2. 她在天堂重生\n尺寸 21x30cm(連框:34.5x43cm)\n複合多媒材\n年份 2024\n義賣價 NT$25,000元' },
      { id: 40, title: '你迷濛的望著我迷濛的眼', image: 'images/artworks/art-40.jpg', collected: true, description: '3. 你迷濛的望著我迷濛的眼\n尺寸 21x30cm(連框:34.5x43cm)\n複合多媒材\n年份 2024\n義賣價 NT$25,000元' },
      { id: 41, title: '撥開雲的帷幕', image: 'images/artworks/art-41.jpg', collected: true, description: '4. 撥開雲的帷幕\n尺寸 21x30cm(連框:34.5x43cm)\n複合多媒材\n年份 2024\n義賣價 NT$25,000元' },
      { id: 42, title: '你的呼吸在夢與晨的交界徘迴', image: 'images/artworks/art-42.jpg', collected: true, description: '5. 你的呼吸在夢與晨的交界徘迴\n尺寸 42x60cm(連框:56x73cm)\n複合多媒材\n年份 2024\n義賣價 NT$90,000元' },
    ]
  },
  {
    id: 'huang',
    name: '黃麗香',
    avatar: 'images/painters/painter-5.png',
    shortBio: '以自然為師，將大地的美好化為永恆的藝術印記。',
    fullBio: '黃麗香，以自然為師，將大地的美好化為永恆的藝術印記。熱愛大自然，經常透過寫生捕捉風景的瞬息萬變。',
    education: [],
    experience: [],
    artworks: [
      { id: 11, title: '朝陽', image: 'images/artworks/art-11.jpg', collected: true, description: '1.《朝陽》｜粉蠟筆畫作品｜40.3*47.5cm(含框) ｜義賣價 NT$10,000元\n晨光初照，萬物甦醒。《朝陽》以層疊細膩的筆觸與柔和卻飽滿的色彩，描繪天際與海面交融的瞬間。暖橘、金黃與深藍彼此交錯，營造出日出時刻特有的溫潤光感與心靈的寧靜氛圍。' },
      { id: 43, title: '溫暖', image: 'images/artworks/art-43.jpg', collected: true, description: '2.《溫暖》｜粉蠟筆作品｜40.3*47.5cm(含框)｜ 義賣價 NT$10,000元\n鮮明色彩勾勒自然花木之美，紅橙紫綠交織出一幅溫柔又充滿生命力的畫面。筆觸真誠、色彩堆疊，傳遞出童趣與心靈的溫度，如內心風景般，令人感受到關懷與希望。' },
      { id: 44, title: '飛翔', image: 'images/artworks/art-44.jpg', collected: true, description: '3.《飛翔》｜粉蠟筆作品｜48.8*59.3cm(含框)｜義賣價 NT$20,000元\n以層層色彩堆疊出花朵綻放的瞬間，畫面奔放卻不失柔和，展現生命的美好與力量。抽象表現融合自然意象，象徵希望與生機在困境中悄然盛開，是對生命韌性的一種詩意回應。' },
      { id: 45, title: '幸福', image: 'images/artworks/art-45.jpg', collected: true, description: '4.《幸福》｜粉蠟筆作品｜49*48cm(含框)  ｜義賣價 NT$20,000元\n在樹蔭下一隅，小花與木椅靜靜陪伴，兩隻藍鵲停駐其間，構成一幅寧靜溫馨的生活畫面。色調自然，筆觸溫潤，傳遞出人與自然和諧共處的幸福意象。平凡中見真情，是畫者對幸福最溫柔的詮釋。' },
      { id: 46, title: '富貴', image: 'images/artworks/art-46.jpg', collected: true, description: '5.《富貴》｜粉蠟筆作品｜45*57.7cm(含框) ｜義賣價 NT$30,000元\n色彩繽紛的花束盛開於素雅陶瓶中，構圖飽滿、色調溫暖，象徵富足與美好。粉蠟筆筆觸粗細交錯，表現出花卉的生命力與層次感，充滿節慶與祝福的氛圍。畫面洋溢著喜悅與圓滿，是一件具藝術性與吉祥意涵兼具的作品，適合典藏或贈禮。' },
    ]
  }
];
