import { members } from "@/lib/data";

export const metadata = {
  title: "멤버 | RESCENE 팬페이지",
  description: "르센느(RESCENE) 다섯 멤버의 상세 프로필을 확인하세요. 원이, 리브, 미나미, 메이, 제나.",
};

export default function MembersPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-3">Members</p>
          <h1 className="text-5xl font-black text-white mb-4">멤버 소개</h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            르센느를 이루는 다섯 멤버를 만나보세요.
            <br />
            <span className="text-xs text-gray-600 mt-1 block">
              * 공식 포지션은 미공개. 팬 커뮤니티 기반 분류 참고.
            </span>
          </p>
        </div>

        {/* Member cards */}
        <div className="space-y-12">
          {members.map((member, index) => (
            <div
              key={member.id}
              id={member.id}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div
                  className={`w-64 h-64 rounded-3xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-8xl shadow-2xl`}
                  style={{ boxShadow: `0 0 60px ${member.color}40` }}
                >
                  {member.emoji}
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 glass-card rounded-3xl p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-gray-500 text-sm">{member.name}</p>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: `${member.color}20`, color: member.color }}
                      >
                        {member.nationality}
                      </span>
                    </div>
                    <h2 className="text-4xl font-black text-white">{member.nameKr}</h2>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">{member.bio}</p>

                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">생년월일</p>
                    <p className="text-white font-semibold">{member.birthdate}</p>
                  </div>
                  <div className="w-px h-8 bg-gray-800" />
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">국적</p>
                    <p className="text-white font-semibold">{member.nationality}</p>
                  </div>
                  <div className="w-px h-8 bg-gray-800" />
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-widest mb-1">멤버 컬러</p>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full" style={{ backgroundColor: member.color }} />
                      <span className="text-white font-semibold text-sm font-mono">{member.color}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-widest mb-3">알려진 정보</p>
                  <ul className="space-y-2">
                    {member.facts.map((fact) => (
                      <li key={fact} className="flex items-start gap-2 text-sm text-gray-300">
                        <span style={{ color: member.color }} className="mt-0.5">✦</span>
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-16 glass-card rounded-2xl p-6 text-center">
          <p className="text-gray-500 text-sm">
            더 정확한 정보는 공식 채널에서 확인해 주세요.
          </p>
          <div className="flex justify-center gap-4 mt-3">
            {[
              { label: "공식 홈페이지", href: "https://rescene.bstage.in" },
              { label: "나무위키", href: "https://namu.wiki/w/RESCENE" },
              { label: "인스타그램", href: "https://www.instagram.com/rescene_official/" },
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
