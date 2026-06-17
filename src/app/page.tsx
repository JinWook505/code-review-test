import Link from "next/link";
import { members, albums, news, schedule } from "@/lib/data";
import { ChevronRight, Calendar, Music, Users, ExternalLink } from "lucide-react";

export default function Home() {
  const latestAlbum = albums[albums.length - 1];
  const recentNews = news.slice(0, 3);
  const recentSchedule = schedule.slice(-4).reverse();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-600/15 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Latest release badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span>최신 발매 · Runaway (2026.04.08)</span>
          </div>

          <h1 className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tight mb-4">
            <span className="shimmer-text">RESCENE</span>
          </h1>
          <p className="text-2xl sm:text-3xl text-purple-200 font-light mb-4 tracking-widest">
            르 센 느
          </p>
          <p className="text-gray-400 text-base max-w-xl mx-auto mb-2">
            THE MUZE Entertainment · 2024.03.26 데뷔
          </p>
          <p className="text-gray-500 text-sm max-w-xl mx-auto mb-10">
            향기(Scent)로 다시(RE) 장면(SCENE)을 떠올린다
            <br />
            팬덤명: REMINE (리마인)
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/members"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-purple-900/30"
            >
              <Users size={18} />
              멤버 보기
            </Link>
            <Link
              href="/music"
              className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-purple-500/30 rounded-full font-semibold text-white hover:bg-white/10 transition-all hover:scale-105"
            >
              <Music size={18} />
              디스코그래피
            </Link>
            <a
              href="https://rescene.bstage.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-purple-500/30 rounded-full font-semibold text-white hover:bg-white/10 transition-all hover:scale-105"
            >
              <ExternalLink size={18} />
              공식 사이트
            </a>
          </div>

          {/* Member color dots */}
          <div className="flex justify-center gap-3 mt-12">
            {members.map((m) => (
              <Link
                key={m.id}
                href={`/members#${m.id}`}
                title={`${m.nameKr} (${m.name})`}
                className="group flex flex-col items-center gap-1"
              >
                <div
                  className="w-3 h-3 rounded-full group-hover:scale-150 transition-transform"
                  style={{ backgroundColor: m.color }}
                />
                <span className="text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  {m.nameKr}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 text-xs">
          <span>스크롤</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-purple-500 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Members Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-2">Members</p>
            <h2 className="text-3xl font-bold text-white">멤버 소개</h2>
          </div>
          <Link href="/members" className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors">
            자세히 보기 <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {members.map((member) => (
            <Link
              key={member.id}
              href={`/members#${member.id}`}
              className="group glass-card rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 hover:border-purple-500/50"
            >
              <div
                className={`w-16 h-16 rounded-full mx-auto mb-4 bg-gradient-to-br ${member.gradient} flex items-center justify-center text-3xl shadow-lg`}
                style={{ boxShadow: `0 4px 20px ${member.color}40` }}
              >
                {member.emoji}
              </div>
              <p className="font-bold text-white text-lg">{member.nameKr}</p>
              <p className="text-xs text-gray-500 mt-0.5">{member.name}</p>
              <p className="text-xs text-gray-600 mt-1">{member.nationality}</p>
              <div className="mt-2">
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: `${member.color}20`, color: member.color }}
                >
                  {member.birthYear}년생
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Release */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-2">Latest Release</p>
            <h2 className="text-3xl font-bold text-white mb-2">최신 발매</h2>
            <p className="text-gray-500 text-sm mb-8">{latestAlbum.releaseDate}</p>

            <div className={`relative rounded-3xl bg-gradient-to-br ${latestAlbum.color} p-8 glow-card`}>
              <div className="absolute inset-0 rounded-3xl bg-black/20" />
              <div className="relative">
                <span className="text-xs font-medium text-white/60 uppercase tracking-widest">{latestAlbum.type}</span>
                <h3 className="text-4xl font-black text-white mt-2 mb-6">{latestAlbum.title}</h3>
                <ul className="space-y-2 mb-6">
                  {latestAlbum.tracks.map((track, i) => (
                    <li key={track.title} className="flex items-center gap-3 text-white/80">
                      <span className="text-white/40 text-sm w-4 text-right">{i + 1}</span>
                      <span className={`text-sm ${track.isTitle ? "font-bold" : ""}`}>{track.title}</span>
                      {track.isTitle && (
                        <span className="ml-auto text-xs bg-white/20 text-white px-2 py-0.5 rounded-full">타이틀</span>
                      )}
                    </li>
                  ))}
                </ul>
                {latestAlbum.mvLink && (
                  <a
                    href={latestAlbum.mvLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm text-white font-medium transition-colors"
                  >
                    ▶ MV 보러가기
                  </a>
                )}
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">전체 디스코그래피</h3>
              <Link href="/music" className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors">
                전체 보기 <ChevronRight size={16} />
              </Link>
            </div>
            <div className="space-y-3">
              {[...albums].reverse().map((album) => (
                <div key={album.id} className="glass-card rounded-xl p-4 flex items-center gap-4 hover:border-purple-500/40 transition-all">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${album.color} flex-shrink-0 flex items-center justify-center`}>
                    <Music size={20} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white truncate">{album.title}</p>
                    <p className="text-xs text-gray-500">{album.type} · {album.releaseDate}</p>
                  </div>
                  <span className="text-xs text-gray-600 flex-shrink-0">{album.tracks.length}곡</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-2">News</p>
            <h2 className="text-3xl font-bold text-white">최신 소식</h2>
          </div>
          <Link href="/community" className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors">
            전체 보기 <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {recentNews.map((item) => (
            <article key={item.id} className="glass-card rounded-2xl p-6 hover:border-purple-500/40 transition-all hover:scale-[1.02] cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${item.tagColor} text-white`}>
                  {item.tag}
                </span>
                <span className="text-xs text-gray-600">{item.date}</span>
              </div>
              <h3 className="font-bold text-white mb-2 leading-tight">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">{item.description}</p>
              {item.source && (
                <p className="text-xs text-gray-700 mt-3">출처: {item.source}</p>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Activity Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-2">Timeline</p>
            <h2 className="text-3xl font-bold text-white">최근 활동</h2>
          </div>
          <Link href="/schedule" className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors">
            전체 활동 <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {recentSchedule.map((item) => (
            <div key={item.id} className="glass-card rounded-2xl p-5 flex items-start gap-4 hover:border-purple-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-900/40 flex items-center justify-center flex-shrink-0">
                <Calendar size={20} className="text-purple-400" />
              </div>
              <div>
                <p className="text-xs text-purple-400 font-medium mb-0.5">{item.date}</p>
                <p className="font-bold text-white text-sm">{item.title}</p>
                {item.note && <p className="text-xs text-gray-500 mt-0.5">{item.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Official Links */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-purple-900/60 via-violet-900/60 to-pink-900/40 border border-purple-500/20 p-10 text-center">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]" />
          </div>
          <p className="relative text-purple-300 text-sm uppercase tracking-widest mb-3">Official Channels</p>
          <h2 className="relative text-3xl font-black text-white mb-2">공식 채널 바로가기</h2>
          <p className="relative text-gray-400 text-sm mb-8">팬덤명: REMINE (리마인) · 공식 팬클럽: Bstage</p>
          <div className="relative flex flex-wrap justify-center gap-3">
            {[
              { label: "공식 홈페이지", href: "https://rescene.bstage.in", icon: "🌐" },
              { label: "YouTube", href: "https://www.youtube.com/@RESCENE_official", icon: "▶️" },
              { label: "Instagram", href: "https://www.instagram.com/rescene_official/", icon: "📸" },
              { label: "X (트위터)", href: "https://x.com/RESCENEofficial", icon: "🐦" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 glass-card rounded-full text-sm text-white hover:border-purple-500/50 hover:text-purple-300 transition-all"
              >
                <span>{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
