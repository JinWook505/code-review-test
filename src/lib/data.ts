export type Member = {
  id: string;
  name: string;
  nameKr: string;
  birthdate: string;
  birthYear: number;
  nationality: string;
  color: string;
  gradient: string;
  emoji: string;
  bio: string;
  facts: string[];
  /** 공식 프로필 사진 URL — 설정 시 FallbackImage로 표시, 미설정 시 emoji gradient 표시 */
  imageUrl?: string;
  /** imageUrl 클릭 시 이동할 출처 URL */
  sourceUrl?: string;
};

export type Album = {
  id: string;
  title: string;
  releaseDate: string;
  type: "싱글앨범" | "미니앨범" | "디지털싱글";
  tracks: { title: string; isTitle?: boolean }[];
  color: string;
  mvLink?: string;
};

export type NewsItem = {
  id: string;
  date: string;
  title: string;
  description: string;
  tag: string;
  tagColor: string;
  source?: string;
};

export type ScheduleItem = {
  id: string;
  date: string;
  time?: string;
  title: string;
  location?: string;
  type: string;
  note?: string;
};

// 소속사: THE MUZE Entertainment (더뮤즈엔터테인먼트)
// 데뷔일: 2024.03.26
// 팬덤명: REMINE (리마인) — 2024.07.10 공식 발표
// 그룹명 의미: 향기(Scent)로 다시(RE) 장면(SCENE)을 떠올린다 (프루스트 효과)
// 공식 사이트: bstage URL 404 확인됨 — 공식 인스타/유튜브로 대체
// 공식 포지션은 미공개 — 아래 포지션은 팬 커뮤니티 기반

export const members: Member[] = [
  {
    id: "woni",
    name: "Woni",
    nameKr: "원이",
    birthdate: "2004.05.25",
    birthYear: 2004,
    nationality: "한국",
    color: "#A855F7",
    gradient: "from-purple-500 to-violet-400",
    emoji: "🫧",
    bio: "르센느의 리더. 본명 정원이. 2004년생으로 멤버 중 가장 나이가 많으며, 따뜻하고 든든한 리더십으로 그룹의 중심을 잡아줍니다.",
    facts: [
      "멤버 중 최연장자 (2004년생)",
      "본명: 정원이",
      "공식 포지션 미공개 (팬들 사이에서 리더로 불림)",
    ],
  },
  {
    id: "liv",
    name: "Liv",
    nameKr: "리브",
    birthdate: "2006.10.11",
    birthYear: 2006,
    nationality: "한국",
    color: "#EC4899",
    gradient: "from-pink-500 to-rose-400",
    emoji: "🌷",
    bio: "본명 진경은. 맑고 풍부한 보컬로 팬들의 사랑을 받는 멤버. 감성적인 표현력으로 르센느의 감정선을 이끌어 갑니다.",
    facts: [
      "본명: 진경은",
      "2006년생",
      "팬들 사이에서 메인보컬로 평가받음",
    ],
  },
  {
    id: "minami",
    name: "Minami",
    nameKr: "미나미",
    birthdate: "2006.11.29",
    birthYear: 2006,
    nationality: "일본",
    color: "#06B6D4",
    gradient: "from-cyan-500 to-sky-400",
    emoji: "🌸",
    bio: "본명 이토 미나미(伊藤 南). 르센느의 일본인 멤버로, MBC 서바이벌 '나의 빛나는 소녀' 파이널리스트 출신. 보컬과 랩을 넘나드는 다재다능한 퍼포머입니다.",
    facts: [
      "본명: 이토 미나미 (伊藤 南)",
      "일본 출신 — 르센느 유일한 외국인 멤버",
      "MBC '나의 빛나는 소녀' 파이널리스트 출신",
    ],
  },
  {
    id: "may",
    name: "May",
    nameKr: "메이",
    birthdate: "2008.08.19",
    birthYear: 2008,
    nationality: "한국",
    color: "#F59E0B",
    gradient: "from-amber-400 to-yellow-300",
    emoji: "🌻",
    bio: "본명 이예빈. 2008년생으로 막내라인에 속하며, 유려한 춤과 아름다운 비주얼로 르센느의 퍼포먼스에 생동감을 불어넣는 멤버입니다.",
    facts: [
      "본명: 이예빈",
      "2008년생 막내라인",
      "팬들 사이에서 리드댄서·비주얼로 평가받음",
    ],
  },
  {
    id: "zena",
    name: "Zena",
    nameKr: "제나",
    birthdate: "2008.11.27",
    birthYear: 2008,
    nationality: "한국",
    color: "#10B981",
    gradient: "from-emerald-500 to-teal-400",
    emoji: "💎",
    bio: "본명 김가영. 르센느의 막내(마크네). Channel A '별들의 전쟁' 출신으로 데뷔 전부터 주목받았으며, 강렬한 무대 존재감과 비주얼 센터로 활약합니다.",
    facts: [
      "본명: 김가영",
      "2008년생 막내 (마크네)",
      "Channel A '별들의 전쟁' 출신",
    ],
  },
];

export const albums: Album[] = [
  {
    id: "rescene-single",
    title: "Re:Scene",
    releaseDate: "2024.03.26",
    type: "싱글앨범",
    color: "from-violet-600 to-purple-500",
    mvLink: "https://www.youtube.com/watch?v=zpSejlkSXLA",
    tracks: [
      { title: "YoYo" },
      { title: "UhUh", isTitle: true },
    ],
  },
  {
    id: "scenedrome",
    title: "SCENEDROME",
    releaseDate: "2024.08.27",
    type: "미니앨범",
    color: "from-sky-500 to-cyan-400",
    mvLink: "https://www.youtube.com/watch?v=9XttLI0oH0I",
    tracks: [
      { title: "Lucky You" },
      { title: "LOVE ATTACK", isTitle: true },
      { title: "New World" },
      { title: "Pinball", isTitle: true },
    ],
  },
  {
    id: "glow-up",
    title: "Glow Up",
    releaseDate: "2025.02.05",
    type: "미니앨범",
    color: "from-pink-500 to-rose-400",
    mvLink: "https://www.youtube.com/watch?v=h0xUtrb_JBc",
    tracks: [
      { title: "CRASH" },
      { title: "Glow Up", isTitle: true },
      { title: "Going on" },
      { title: "In my lotion" },
      { title: "Cotton Candy" },
    ],
  },
  {
    id: "dearest",
    title: "Dearest",
    releaseDate: "2025.07.02",
    type: "싱글앨범",
    color: "from-amber-500 to-orange-400",
    mvLink: "https://www.youtube.com/watch?v=ZbO9PBdFRdc",
    tracks: [
      { title: "Deja Vu", isTitle: true },
      { title: "Mood" },
    ],
  },
  {
    id: "busy-boy",
    title: "Busy Boy",
    releaseDate: "2026.02.27",
    type: "디지털싱글",
    color: "from-blue-600 to-indigo-500",
    tracks: [
      { title: "Busy Boy", isTitle: true },
    ],
  },
  {
    id: "lip-bomb",
    title: "lip bomb",
    releaseDate: "2025.11.25",
    type: "미니앨범",
    color: "from-rose-600 to-pink-500",
    mvLink: "https://www.youtube.com/watch?v=ByX8EZq8500",
    tracks: [
      { title: "Heart Drop (Cranberry)", isTitle: true },
      { title: "Bloom (Blackberry)", isTitle: true },
      { title: "Love Echo (Raspberry)" },
      { title: "Hello XO (Strawberry)" },
      { title: "MVP (Blueberry)" },
    ],
  },
  {
    id: "runaway",
    title: "Runaway",
    releaseDate: "2026.04.08",
    type: "디지털싱글",
    color: "from-indigo-600 to-purple-500",
    mvLink: "https://www.youtube.com/watch?v=rsZwrTNklos",
    tracks: [
      { title: "Runaway", isTitle: true },
    ],
  },
];

export const news: NewsItem[] = [
  {
    id: "1",
    date: "2026.04.08",
    title: "르센느, 디지털 싱글 'Runaway' 발매 및 MV 공개",
    description: "르센느가 첫 번째 디지털 싱글 'Runaway'를 발매하고 뮤직비디오를 공개했습니다. 기존 팝과 다른 새로운 감성으로 팬들의 큰 호응을 얻고 있습니다.",
    tag: "신보",
    tagColor: "bg-purple-500",
    source: "공식 채널",
  },
  {
    id: "2",
    date: "2026.03.12",
    title: "르센느 × Galantis, 'Busy Boy' 리믹스 발매",
    description: "스웨덴 EDM 듀오 갈란티스(Galantis)와 르센느의 협업 리믹스 'Busy Boy (Galantis Remix)'가 공개됐습니다. 글로벌 아티스트와의 콜라보로 르센느의 세계적 인지도가 높아지고 있습니다.",
    tag: "콜라보",
    tagColor: "bg-cyan-500",
    source: "공식 채널",
  },
  {
    id: "3",
    date: "2026.01.06",
    title: "르센느, '코리아 퍼스트 브랜드 어워즈' 라이징스타상 수상",
    description: "르센느가 2026 코리아 퍼스트 브랜드 어워즈에서 라이징스타상을 수상했습니다. 데뷔 2년 차에 이룬 눈부신 성장을 인정받았습니다.",
    tag: "수상",
    tagColor: "bg-amber-500",
    source: "코리아 퍼스트 브랜드 어워즈",
  },
  {
    id: "4",
    date: "2025.11.25",
    title: "미니 3집 'lip bomb' 발매 — 초동 10만 장 돌파",
    description: "르센느의 세 번째 미니앨범 'lip bomb'이 발매 첫 주 10만 장을 돌파하며 그룹 사상 최고 초동을 기록했습니다. Forbes가 선정한 '2025 최고의 K-POP 앨범'에 오르기도 했습니다.",
    tag: "컴백",
    tagColor: "bg-pink-500",
    source: "Forbes, 공식 채널",
  },
];

/** YouTube URL에서 video ID를 추출합니다 */
export function getYouTubeVideoId(url: string): string | null {
  const match = url.match(/[?&]v=([^&]+)/);
  return match?.[1] ?? null;
}

/** YouTube video ID로 고화질 썸네일 URL을 반환합니다 */
export function getYouTubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

export const schedule: ScheduleItem[] = [
  {
    id: "1",
    date: "2024.03.26",
    title: "데뷔 싱글 《Re:Scene》 발매",
    type: "데뷔",
    note: "타이틀곡 UhUh, 프리릴리즈 YoYo",
  },
  {
    id: "2",
    date: "2024.07.10",
    title: "팬덤명 'REMINE(리마인)' 공식 발표",
    type: "팬덤",
  },
  {
    id: "3",
    date: "2024.08.27",
    title: "미니 1집 《SCENEDROME》 발매",
    type: "컴백",
    note: "더블 타이틀: LOVE ATTACK / Pinball",
  },
  {
    id: "4",
    date: "2025.02.05",
    title: "미니 2집 《Glow Up》 발매",
    type: "컴백",
    note: "음방 19회 활동 · NME 2025 K-POP 노래 선정",
  },
  {
    id: "5",
    date: "2025.08.09",
    title: "1st FAN-CON [Project 326]",
    location: "성신여자대학교 운정그린캠퍼스 대강당",
    type: "팬콘",
    note: "전석 매진",
  },
  {
    id: "6",
    date: "2025.11.25",
    title: "미니 3집 《lip bomb》 발매",
    type: "컴백",
    note: "더블 타이틀: Heart Drop / Bloom · 초동 10만 장 돌파 · Forbes 선정",
  },
  {
    id: "7",
    date: "2026.02.27",
    title: "디지털 싱글 'Busy Boy' 발매",
    type: "신보",
  },
  {
    id: "8",
    date: "2026.03.12",
    title: "'Busy Boy (Galantis Remix)' 발매",
    type: "신보",
    note: "스웨덴 EDM 듀오 Galantis 협업",
  },
  {
    id: "9",
    date: "2026.04.08",
    title: "디지털 싱글 'Runaway' 발매",
    type: "신보",
    note: "MV 동시 공개",
  },
];
