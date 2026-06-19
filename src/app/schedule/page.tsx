import { schedule } from "@/lib/data";
import { Calendar, MapPin, Info } from "lucide-react";

export const metadata = {
  title: "활동 연표 | RESCENE 팬페이지",
  description: "르센느(RESCENE)의 데뷔부터 현재까지 주요 활동 연표.",
};

const typeStyles: Record<string, { bg: string; text: string; dot: string }> = {
  "데뷔": { bg: "bg-pink-500/10", text: "text-pink-400", dot: "bg-pink-500" },
  "컴백": { bg: "bg-purple-500/10", text: "text-purple-400", dot: "bg-purple-500" },
  "팬덤": { bg: "bg-yellow-500/10", text: "text-yellow-400", dot: "bg-yellow-500" },
  "팬콘": { bg: "bg-violet-500/10", text: "text-violet-400", dot: "bg-violet-500" },
  "신보": { bg: "bg-cyan-500/10", text: "text-cyan-400", dot: "bg-cyan-500" },
};

export default function SchedulePage() {
  return (
    <div className="min-h-screen pt-24 pb-32 xl:pb-40">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-20 md:mb-28 xl:mb-32">
          <p className="text-purple-400 text-xs sm:text-sm font-medium uppercase tracking-widest mb-3">Timeline</p>
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white mb-5">활동 연표</h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            르센느의 데뷔부터 현재까지 주요 활동을 한눈에 확인하세요
          </p>
        </div>

        {/* Type legend */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-14 sm:mb-16">
          {Object.entries(typeStyles).map(([type, style]) => (
            <div key={type} className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full ${style.bg}`}>
              <div className={`w-2 h-2 rounded-full flex-shrink-0 ${style.dot}`} />
              <span className={`text-xs sm:text-sm font-medium ${style.text}`}>{type}</span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600 via-purple-800 to-transparent" />

          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {[...schedule].reverse().map((item) => {
              const style = typeStyles[item.type] ?? { bg: "bg-gray-500/10", text: "text-gray-400", dot: "bg-gray-500" };

              return (
                <div key={item.id} className="flex gap-5 sm:gap-6">
                  <div className="flex-shrink-0 w-10 sm:w-12 flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full ${style.dot} ring-4 ring-[#0F0A1E] mt-5 sm:mt-6`} />
                  </div>

                  <div className="flex-1 glass-card rounded-2xl p-5 sm:p-6 lg:p-7 hover:border-purple-500/40 transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-2 sm:gap-3 mb-3">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${style.bg} ${style.text}`}>
                        {item.type}
                      </span>
                      <div className="flex items-center gap-1 text-gray-600 text-xs">
                        <Calendar size={11} />
                        <span>{item.date}</span>
                        {item.time && <span> · {item.time}</span>}
                      </div>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug">{item.title}</h3>

                    {item.location && (
                      <div className="flex items-center gap-1.5 text-gray-500 text-xs sm:text-sm mt-2">
                        <MapPin size={11} />
                        <span>{item.location}</span>
                      </div>
                    )}

                    {item.note && (
                      <div className="flex items-start gap-1.5 text-gray-600 text-xs mt-2.5 leading-relaxed">
                        <Info size={11} className="mt-0.5 flex-shrink-0" />
                        <span>{item.note}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="border-t border-purple-900/25 mt-20 lg:mt-28" />

        {/* Awards */}
        <div className="mt-20 lg:mt-24">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-7 sm:mb-9">수상 내역</h2>
          <div className="space-y-4 sm:space-y-5">
            {[
              {
                date: "2024.11.02",
                award: "아시아 모델 어워즈 (Asia Model Awards)",
                category: "라이징 스타 가수상",
                official: true,
              },
              {
                date: "2024.12",
                award: "Grammy.com 에디토리얼 (공식 시상 아님)",
                category: "2024 K-POP 노래 10선 — LOVE ATTACK 선정",
                official: false,
              },
              {
                date: "2026.01.06",
                award: "코리아 퍼스트 브랜드 어워즈",
                category: "라이징스타상",
                official: true,
              },
            ].map((item) => (
              <div key={item.award} className="glass-card rounded-2xl p-5 sm:p-6 lg:p-7 flex items-center gap-4 sm:gap-5 hover:border-purple-500/40 transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-900/30 flex items-center justify-center flex-shrink-0 text-lg sm:text-xl">
                  {item.official ? "🏆" : "📋"}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white text-sm sm:text-base leading-snug">{item.category}</p>
                  <p className="text-xs text-gray-500 mt-1 truncate">{item.award}</p>
                </div>
                <span className="text-xs text-gray-600 flex-shrink-0">{item.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-purple-900/25 mt-20 lg:mt-24" />

        {/* Note */}
        <div className="mt-14 sm:mt-16 glass-card rounded-2xl p-7 sm:p-9 text-center">
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            일정 및 수상 내역은 공식 채널 기준입니다. 최신 정보는 아래 공식 채널에서 확인해 주세요.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-5">
            {[
              { label: "X (트위터)", href: "https://x.com/RESCENEofficial" },
              { label: "인스타그램", href: "https://www.instagram.com/rescene_official/" },
              { label: "YouTube", href: "https://www.youtube.com/@RESCENE_official" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-purple-400 hover:text-purple-300 underline underline-offset-4 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
