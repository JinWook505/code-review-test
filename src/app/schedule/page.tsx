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
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-3">Timeline</p>
          <h1 className="text-5xl font-black text-white mb-4">활동 연표</h1>
          <p className="text-gray-400 max-w-md mx-auto">
            르센느의 데뷔부터 현재까지 주요 활동을 한눈에 확인하세요
          </p>
        </div>

        {/* Type legend */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {Object.entries(typeStyles).map(([type, style]) => (
            <div key={type} className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${style.bg}`}>
              <div className={`w-2 h-2 rounded-full ${style.dot}`} />
              <span className={`text-sm font-medium ${style.text}`}>{type}</span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-600 via-purple-800 to-transparent" />

          <div className="space-y-6">
            {[...schedule].reverse().map((item) => {
              const style = typeStyles[item.type] ?? { bg: "bg-gray-500/10", text: "text-gray-400", dot: "bg-gray-500" };

              return (
                <div key={item.id} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full ${style.dot} ring-4 ring-[#0F0A1E] mt-5`} />
                  </div>

                  <div className="flex-1 glass-card rounded-2xl p-5 hover:border-purple-500/40 transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${style.bg} ${style.text}`}>
                        {item.type}
                      </span>
                      <div className="flex items-center gap-1 text-gray-600 text-xs">
                        <Calendar size={12} />
                        <span>{item.date}</span>
                        {item.time && <span> · {item.time}</span>}
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-white">{item.title}</h3>

                    {item.location && (
                      <div className="flex items-center gap-1.5 text-gray-500 text-sm mt-1">
                        <MapPin size={12} />
                        <span>{item.location}</span>
                      </div>
                    )}

                    {item.note && (
                      <div className="flex items-start gap-1.5 text-gray-600 text-xs mt-2">
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

        {/* Awards */}
        <div className="mt-16">
          <h2 className="text-xl font-bold text-white mb-6">수상 내역</h2>
          <div className="space-y-3">
            {[
              {
                date: "2024.11.02",
                award: "아시아 모델 어워즈 (Asia Model Awards)",
                category: "라이징 스타 가수상",
              },
              {
                date: "2024.12",
                award: "그래미 어워즈",
                category: "2024 K-POP 노래 10선 — LOVE ATTACK 선정",
              },
              {
                date: "2026.01.06",
                award: "코리아 퍼스트 브랜드 어워즈",
                category: "라이징스타상",
              },
            ].map((item) => (
              <div key={item.award} className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:border-purple-500/40 transition-all">
                <div className="w-10 h-10 rounded-xl bg-amber-900/30 flex items-center justify-center flex-shrink-0 text-lg">
                  🏆
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white text-sm">{item.category}</p>
                  <p className="text-xs text-gray-500 truncate">{item.award}</p>
                </div>
                <span className="text-xs text-gray-600 flex-shrink-0">{item.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div className="mt-12 glass-card rounded-2xl p-6 text-center">
          <p className="text-gray-500 text-sm">
            일정 및 수상 내역은 공식 채널 기준입니다. 최신 정보는 아래 공식 채널에서 확인해 주세요.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            {[
              { label: "X (트위터)", href: "https://x.com/RESCENEofficial" },
              { label: "인스타그램", href: "https://www.instagram.com/rescene_official/" },
              { label: "공식 홈페이지", href: "https://rescene.bstage.in" },
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
        </div>
      </div>
    </div>
  );
}
