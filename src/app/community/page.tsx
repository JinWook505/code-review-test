import { news } from "@/lib/data";
import { MessageCircle, Heart, Eye, Pin, ExternalLink } from "lucide-react";

export const metadata = {
  title: "커뮤니티 | RESCENE 팬페이지",
  description: "르센느(RESCENE) 팬들이 모이는 커뮤니티 공간. REMINE 팬 게시판.",
};

const posts = [
  {
    id: 1,
    category: "📢 공지",
    title: "르센느 팬페이지 오픈 안내",
    author: "운영진",
    date: "2026.06.01",
    views: 3241,
    likes: 428,
    comments: 52,
    pinned: true,
    content: "르센느(RESCENE) 비공식 팬페이지가 오픈되었습니다! 팬덤 REMINE 여러분의 많은 참여 부탁드립니다 💜",
  },
  {
    id: 2,
    category: "🎵 음악",
    title: "Runaway MV 소감 모음 — 르마인들 다들 어떻게 봤어요?",
    author: "원이는리더",
    date: "2026.04.09",
    views: 2831,
    likes: 512,
    comments: 89,
    pinned: false,
    content: "어제 Runaway MV 나왔는데 진짜 다들 소감 나눠요! 저는 제나 파트에서 폭발했어요",
  },
  {
    id: 3,
    category: "💎 제나",
    title: "제나 별들의 전쟁 시절 영상 모음 (데뷔 전 참고자료)",
    author: "제나사랑",
    date: "2026.03.20",
    views: 1892,
    likes: 344,
    comments: 47,
    pinned: false,
    content: "제나 Channel A 별들의 전쟁 출신인 거 아는 사람 얼마나 돼요?? 데뷔 전 영상 찾아봤어요",
  },
  {
    id: 4,
    category: "🌸 미나미",
    title: "미나미 나의 빛나는 소녀 파이널 무대 다시보기 링크",
    author: "미나미월드",
    date: "2026.02.15",
    views: 2455,
    likes: 601,
    comments: 73,
    pinned: false,
    content: "미나미 서바이벌 시절 찾아보고 싶었는데 다들 봤어요? MBC 나의 빛나는 소녀 파이널리스트 출신이에요",
  },
  {
    id: 5,
    category: "🏆 수상",
    title: "Forbes 2025 최고의 K-POP 앨범 선정!! lip bomb 🎉",
    author: "REMINE글로벌",
    date: "2025.12.01",
    views: 5102,
    likes: 1203,
    comments: 198,
    pinned: false,
    content: "Forbes가 lip bomb을 2025 최고의 K-POP 앨범으로 선정했어요!! 르마인들 너무 자랑스럽다",
  },
  {
    id: 6,
    category: "🎵 음악",
    title: "르센느 입문 순서 추천 (REMINE 새싹용)",
    author: "3년차리마인",
    date: "2025.11.30",
    views: 6334,
    likes: 1891,
    comments: 241,
    pinned: false,
    content: "르센느 처음 입덕하는 분들을 위해 제가 생각하는 순서 정리해봤어요! UhUh → LOVE ATTACK → Glow Up → lip bomb",
  },
];

const categoryColors: Record<string, string> = {
  "📢 공지": "bg-red-500/20 text-red-400",
  "🎵 음악": "bg-purple-500/20 text-purple-400",
  "💎 제나": "bg-emerald-500/20 text-emerald-400",
  "🌸 미나미": "bg-cyan-500/20 text-cyan-400",
  "🏆 수상": "bg-amber-500/20 text-amber-400",
};

export default function CommunityPage() {
  return (
    <div className="min-h-screen pt-24 pb-32 xl:pb-40">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="text-center mb-20 md:mb-28 xl:mb-32">
          <p className="text-purple-400 text-xs sm:text-sm font-medium uppercase tracking-widest mb-3">Community</p>
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white mb-5">커뮤니티</h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto leading-loose">
            르센느(RESCENE) 팬덤 <span className="text-purple-300 font-semibold">REMINE</span>이 모이는 공간입니다
          </p>
        </div>

        {/* Official News */}
        <div className="mb-20 md:mb-28 xl:mb-32">
          <div className="flex items-center justify-between mb-8 sm:mb-10">
            <h2 className="text-lg sm:text-xl xl:text-2xl font-bold text-white">공식 소식</h2>
            <span className="text-xs text-gray-600">출처 명시 기반</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-7 xl:gap-8">
            {news.map((item) => (
              <article key={item.id} className="glass-card rounded-2xl p-7 sm:p-8 xl:p-9 hover:border-purple-500/40 transition-colors cursor-pointer flex flex-col">
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${item.tagColor} text-white`}>
                    {item.tag}
                  </span>
                  <span className="text-xs text-gray-600">{item.date}</span>
                </div>
                <h3 className="font-bold text-white mb-3 text-sm sm:text-base leading-snug">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1">{item.description}</p>
                {item.source && (
                  <p className="text-xs text-gray-700 mt-5 pt-4 border-t border-gray-800/60">출처: {item.source}</p>
                )}
              </article>
            ))}
          </div>
        </div>

        <div className="border-t border-purple-900/25 mb-20 md:mb-28 xl:mb-32" />

        {/* Official channels */}
        <div className="mb-20 md:mb-28 xl:mb-32 glass-card rounded-2xl p-7 sm:p-9">
          <p className="text-sm sm:text-base xl:text-lg font-semibold text-white mb-5 sm:mb-6">공식 팬 채널</p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {[
              { label: "YouTube 공식", href: "https://www.youtube.com/@RESCENE_official", icon: "▶️" },
              { label: "Instagram", href: "https://www.instagram.com/rescene_official/", icon: "📸" },
              { label: "X/트위터", href: "https://x.com/RESCENEofficial", icon: "🐦" },
              { label: "TikTok", href: "https://www.tiktok.com/@rescene_official", icon: "🎵" },
              { label: "Spotify", href: "https://open.spotify.com/artist/5deOsjuFTKrNMJW3rKuL8S", icon: "🎧" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 hover:text-white hover:border-purple-500/40 transition-all"
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
                <ExternalLink size={10} className="flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-purple-900/25 mb-20 md:mb-28 xl:mb-32" />

        {/* Fan Board */}
        <div>
          <div className="flex items-center justify-between mb-8 sm:mb-10">
            <h2 className="text-lg sm:text-xl xl:text-2xl font-bold text-white">팬 게시판</h2>
            <button
              className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-purple-600/30 border border-purple-500/40 rounded-lg text-xs sm:text-sm text-purple-300 hover:bg-purple-600/50 transition-colors"
              aria-label="글쓰기 (데모)"
            >
              <MessageCircle size={14} />
              글쓰기
            </button>
          </div>

          <div className="space-y-5 sm:space-y-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className={`glass-card rounded-2xl p-6 sm:p-8 xl:p-9 hover:border-purple-500/40 transition-colors cursor-pointer ${
                  post.pinned ? "border-purple-500/30 bg-purple-900/10" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  {post.pinned && (
                    <Pin size={14} className="text-purple-400 flex-shrink-0 mt-1" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`text-xs px-2.5 py-0.5 rounded-full ${categoryColors[post.category] ?? "bg-gray-500/20 text-gray-400"}`}>
                        {post.category}
                      </span>
                      {post.pinned && (
                        <span className="text-xs text-purple-400 font-medium">공지</span>
                      )}
                    </div>
                    <h3 className="font-semibold text-white text-sm sm:text-base mb-2 leading-snug">{post.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-500 line-clamp-1 leading-relaxed">{post.content}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-5 pt-4 sm:pt-5 border-t border-gray-800/60">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <span className="text-gray-500 font-medium">{post.author}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-5 text-xs text-gray-600">
                    <span className="flex items-center gap-1.5">
                      <Eye size={12} />
                      {post.views.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Heart size={12} />
                      {post.likes.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MessageCircle size={12} />
                      {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-12 sm:mt-14">
            {[1, 2, 3, 4, 5].map((p) => (
              <button
                key={p}
                className={`w-10 h-10 rounded-lg text-sm transition-colors ${
                  p === 1
                    ? "bg-purple-600 text-white font-bold"
                    : "glass-card text-gray-400 hover:text-white"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
