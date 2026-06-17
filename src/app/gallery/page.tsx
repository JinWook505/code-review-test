import { members } from "@/lib/data";

export const metadata = {
  title: "갤러리 | RESCENE 팬페이지",
  description: "르센느(RESCENE) 갤러리 — 원이, 리브, 미나미, 메이, 제나 멤버별 모아보기",
};

const galleryItems = [
  { id: 1, memberId: "woni", tag: "공방", era: "SCENEDROME" },
  { id: 2, memberId: "minami", tag: "직캠", era: "Glow Up" },
  { id: 3, memberId: "zena", tag: "화보", era: "lip bomb" },
  { id: 4, memberId: "liv", tag: "비하인드", era: "SCENEDROME" },
  { id: 5, memberId: "may", tag: "공방", era: "Glow Up" },
  { id: 6, memberId: "woni", tag: "직캠", era: "lip bomb" },
  { id: 7, memberId: "liv", tag: "화보", era: "Re:Scene" },
  { id: 8, memberId: "minami", tag: "비하인드", era: "Glow Up" },
  { id: 9, memberId: "zena", tag: "직캠", era: "Re:Scene" },
  { id: 10, memberId: "may", tag: "화보", era: "lip bomb" },
  { id: 11, memberId: "woni", tag: "비하인드", era: "Glow Up" },
  { id: 12, memberId: "liv", tag: "공방", era: "lip bomb" },
];

const tagColors: Record<string, string> = {
  "공방": "bg-purple-500/80",
  "직캠": "bg-pink-500/80",
  "화보": "bg-amber-500/80",
  "비하인드": "bg-cyan-500/80",
};

const eraColors: Record<string, string> = {
  "Re:Scene": "from-violet-600 to-purple-500",
  "SCENEDROME": "from-sky-500 to-cyan-400",
  "Glow Up": "from-pink-500 to-rose-400",
  "Dearest": "from-amber-500 to-orange-400",
  "lip bomb": "from-rose-600 to-pink-500",
};

export default function GalleryPage() {
  const memberMap = Object.fromEntries(members.map((m) => [m.id, m]));

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-3">Gallery</p>
          <h1 className="text-5xl font-black text-white mb-4">갤러리</h1>
          <p className="text-gray-400 max-w-md mx-auto">
            르센느의 소중한 순간들을 모아봤습니다
          </p>
        </div>

        {/* Member filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {[{ label: "전체", id: "all" }, ...members.map((m) => ({ label: m.nameKr, id: m.id }))].map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                tab.id === "all"
                  ? "bg-purple-600 text-white"
                  : "glass-card text-gray-400 hover:text-white hover:border-purple-500/40"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tag filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {["전체", "공방", "직캠", "화보", "비하인드"].map((tag) => (
            <button
              key={tag}
              className="px-3 py-1.5 rounded-full text-xs font-medium glass-card text-gray-500 hover:text-white hover:border-purple-500/30 transition-all"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => {
            const member = memberMap[item.memberId];
            const isLarge = index % 7 === 0 || index % 7 === 3;
            const bgColor = eraColors[item.era] ?? member?.gradient ?? "from-gray-700 to-gray-800";

            return (
              <div
                key={item.id}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
                  isLarge ? "col-span-2 row-span-2" : ""
                }`}
              >
                <div
                  className={`w-full ${isLarge ? "h-80" : "h-48"} bg-gradient-to-br ${bgColor} flex items-center justify-center relative`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className={`${isLarge ? "text-6xl" : "text-4xl"}`}>{member?.emoji}</span>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-end p-3">
                    <p className="text-white font-bold text-sm">{member?.nameKr}</p>
                    <p className="text-white/60 text-xs">{item.era}</p>
                  </div>

                  {/* Tag badge */}
                  <div className="absolute top-2 left-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full text-white font-medium ${tagColors[item.tag]}`}>
                      {item.tag}
                    </span>
                  </div>

                  {/* Member name badge */}
                  <div className="absolute top-2 right-2">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full text-white font-medium"
                      style={{ backgroundColor: `${member?.color ?? "#666"}cc` }}
                    >
                      {member?.nameKr}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Notice */}
        <div className="mt-12 glass-card rounded-2xl p-6 text-center">
          <p className="text-gray-600 text-sm">
            실제 사진은 공식 채널에서 확인할 수 있습니다.
          </p>
          <div className="flex justify-center gap-4 mt-3">
            {[
              { label: "공식 인스타그램", href: "https://www.instagram.com/rescene_official/" },
              { label: "공식 유튜브", href: "https://www.youtube.com/@RESCENE_official" },
              { label: "공식 X", href: "https://x.com/RESCENEofficial" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-purple-400 hover:text-purple-300 underline underline-offset-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-gray-700 text-xs mt-4">이 페이지는 비공식 팬페이지입니다.</p>
        </div>
      </div>
    </div>
  );
}
