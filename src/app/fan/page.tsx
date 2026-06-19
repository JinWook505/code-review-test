import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "팬존 | RESCENE 팬페이지",
  description: "르센느(RESCENE) 팬 참여 공간. 르센느 퀴즈, 나와 닮은 멤버 찾기.",
};

const features = [
  {
    href: "/quiz",
    emoji: "🧠",
    title: "르센느 퀴즈",
    subtitle: "Quiz",
    description:
      "10문제로 르센느 지식을 테스트해봐요. 팬덤 이름, 멤버 정보, 앨범 히스토리까지!",
    gradient: "from-purple-600 to-violet-500",
    badge: "10문제",
    badgeColor: "bg-purple-500/20 text-purple-300",
  },
  {
    href: "/member-test",
    emoji: "💜",
    title: "나와 닮은 멤버는?",
    subtitle: "Member Test",
    description:
      "5가지 질문으로 나의 성향과 가장 잘 맞는 르센느 멤버를 찾아봐요. 원이, 리브, 미나미, 메이, 제나 중 누구일까요?",
    gradient: "from-pink-600 to-rose-500",
    badge: "5문항",
    badgeColor: "bg-pink-500/20 text-pink-300",
  },
];

export default function FanPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-3">Fan Zone</p>
          <h1 className="text-5xl font-black text-white mb-4">팬 참여 공간</h1>
          <p className="text-gray-400 max-w-md mx-auto">
            르마인을 위한 인터랙티브 콘텐츠 모음이에요.
            <br />
            퀴즈도 풀고, 나와 닮은 멤버도 찾아봐요!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {features.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="group glass-card rounded-3xl p-8 hover:border-purple-500/40 transition-all hover:scale-[1.02] duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center text-3xl mb-6 shadow-lg`}>
                {f.emoji}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${f.badgeColor}`}>
                  {f.badge}
                </span>
                <span className="text-xs text-gray-600 uppercase tracking-widest">{f.subtitle}</span>
              </div>
              <h2 className="text-2xl font-black text-white mb-3">{f.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{f.description}</p>
              <div className="flex items-center gap-1 text-purple-400 text-sm font-medium group-hover:gap-2 transition-all">
                시작하기 <ChevronRight size={16} />
              </div>
            </Link>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-6 text-center">
          <p className="text-gray-500 text-sm">
            더 많은 팬 참여 콘텐츠가 곧 업데이트될 예정이에요 💜
          </p>
          <div className="flex justify-center gap-4 mt-3">
            <Link href="/community" className="text-xs text-purple-400 hover:text-purple-300 underline underline-offset-2 transition-colors">
              커뮤니티 바로가기
            </Link>
            <Link href="/members" className="text-xs text-purple-400 hover:text-purple-300 underline underline-offset-2 transition-colors">
              멤버 소개 보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
