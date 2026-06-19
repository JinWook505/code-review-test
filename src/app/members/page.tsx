import { members } from "@/lib/data";

export const metadata = {
  title: "멤버 | RESCENE 팬페이지",
  description: "르센느(RESCENE) 다섯 멤버의 상세 프로필을 확인하세요. 원이, 리브, 미나미, 메이, 제나.",
};

export default function MembersPage() {
  return (
    <div className="min-h-screen pt-24 pb-32 xl:pb-40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-20 md:mb-28 xl:mb-32">
          <p className="text-purple-400 text-xs sm:text-sm font-medium uppercase tracking-widest mb-3">Members</p>
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white mb-5 sm:mb-6">멤버 소개</h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto leading-loose">
            르센느를 이루는 다섯 멤버를 만나보세요.
          </p>
          <p className="text-xs text-gray-600 mt-3">
            * 공식 포지션은 미공개. 팬 커뮤니티 기반 분류 참고.
          </p>
        </div>

        {/* Member cards */}
        <div className="space-y-20 md:space-y-28 xl:space-y-36">
          {members.map((member, index) => (
            <div
              key={member.id}
              id={member.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-12 xl:gap-16 items-center`}
            >
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div
                  className={`w-48 h-48 sm:w-60 sm:h-60 md:w-64 md:h-64 xl:w-72 xl:h-72 rounded-3xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-6xl sm:text-7xl md:text-8xl xl:text-9xl shadow-2xl`}
                  style={{ boxShadow: `0 0 60px ${member.color}40` }}
                >
                  {member.emoji}
                </div>
              </div>

              {/* Info card */}
              <div className="flex-1 w-full glass-card rounded-3xl p-7 sm:p-9 md:p-10 xl:p-12">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5 sm:mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-gray-500 text-sm">{member.name}</p>
                      <span
                        className="text-xs px-2.5 py-0.5 rounded-full"
                        style={{ backgroundColor: `${member.color}20`, color: member.color }}
                      >
                        {member.nationality}
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-white">{member.nameKr}</h2>
                  </div>
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-loose mb-8 sm:mb-10">{member.bio}</p>

                <div className="flex flex-wrap items-center gap-5 sm:gap-8 xl:gap-10 mb-8 sm:mb-10 pb-8 sm:pb-10 border-b border-gray-800/60">
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">생년월일</p>
                    <p className="text-white font-semibold text-sm sm:text-base">{member.birthdate}</p>
                  </div>
                  <div className="w-px h-8 bg-gray-800" />
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">국적</p>
                    <p className="text-white font-semibold text-sm sm:text-base">{member.nationality}</p>
                  </div>
                  <div className="w-px h-8 bg-gray-800" />
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">멤버 컬러</p>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full" style={{ backgroundColor: member.color }} />
                      <span className="text-white font-semibold text-xs sm:text-sm font-mono">{member.color}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-widest mb-4 sm:mb-5">알려진 정보</p>
                  <ul className="space-y-4 sm:space-y-5">
                    {member.facts.map((fact) => (
                      <li key={fact} className="flex items-start gap-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                        <span style={{ color: member.color }} className="mt-0.5 flex-shrink-0">✦</span>
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
        <div className="mt-24 md:mt-32 xl:mt-36 glass-card rounded-2xl p-8 sm:p-10 text-center">
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-5">
            더 정확한 정보는 공식 채널에서 확인해 주세요.
          </p>
          <div className="flex flex-wrap justify-center gap-5 sm:gap-7">
            {[
              { label: "나무위키 (RESCENE)", href: "https://namu.wiki/w/RESCENE" },
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
