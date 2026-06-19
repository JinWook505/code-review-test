import Link from "next/link";

const socialLinks = [
  { label: "X (트위터)", href: "https://x.com/RESCENEofficial", icon: "🐦" },
  { label: "인스타그램", href: "https://www.instagram.com/rescene_official/", icon: "📸" },
  { label: "유튜브", href: "https://www.youtube.com/@RESCENE_official", icon: "▶️" },
  { label: "틱톡", href: "https://www.tiktok.com/@rescene_official", icon: "🎵" },
  { label: "Spotify", href: "https://open.spotify.com/artist/5deOsjuFTKrNMJW3rKuL8S", icon: "🎧" },
];

export default function Footer() {
  return (
    <footer className="border-t border-purple-900/30 bg-[#0A0618]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 xl:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-14 xl:gap-20">
          <div>
            <h3 className="text-xl sm:text-2xl font-black shimmer-text mb-4">RESCENE</h3>
            <p className="text-gray-400 text-sm leading-loose mb-4">
              THE MUZE Entertainment · 데뷔 2024.03.26
              <br />팬덤명: REMINE (리마인)
            </p>
            <p className="text-gray-600 text-xs leading-relaxed">
              비공식 팬페이지입니다. 팬이 팬을 위해 만든 모아보기 사이트입니다.
            </p>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-purple-300 uppercase tracking-wider mb-6 sm:mb-7">
              빠른 이동
            </h4>
            <ul className="space-y-3.5 sm:space-y-4 text-sm text-gray-400">
              {(["홈", "멤버", "음악", "갤러리", "일정", "커뮤니티"] as const).map(
                (item, i) => {
                  const hrefs = ["/", "/members", "/music", "/gallery", "/schedule", "/community"];
                  return (
                    <li key={item}>
                      <Link href={hrefs[i]} className="hover:text-purple-300 transition-colors">
                        {item}
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-purple-300 uppercase tracking-wider mb-6 sm:mb-7">
              공식 채널
            </h4>
            <ul className="space-y-3.5 sm:space-y-4">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-purple-300 transition-colors"
                  >
                    <span>{link.icon}</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 sm:mt-16 pt-7 sm:pt-8 border-t border-purple-900/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© 2026 rescene 팬페이지 · 비공식 팬사이트</p>
          <p>Made with 💜 by fans, for fans</p>
        </div>
      </div>
    </footer>
  );
}
