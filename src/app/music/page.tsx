import { albums } from "@/lib/data";
import { Music, ExternalLink } from "lucide-react";

export const metadata = {
  title: "음악 | RESCENE 팬페이지",
  description: "르센느(RESCENE)의 전체 디스코그래피. Re:Scene, SCENEDROME, Glow Up, Dearest, lip bomb, Runaway",
};

const typeColors: Record<string, string> = {
  "싱글앨범": "bg-violet-500/20 text-violet-300 border-violet-500/30",
  "미니앨범": "bg-pink-500/20 text-pink-300 border-pink-500/30",
  "디지털싱글": "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
};

const oстТracks = [
  { title: "Counting Star", work: "THE MAGIC STAR OST", date: "2024.06.26" },
  { title: "BamBamBam (밤밤밤)", work: "남주의 첫날밤을 가져버렸다 OST", date: "2025.06.12" },
  { title: "Love Frequency (고백주파수)", work: "첫사랑 엔딩 OST", date: "2025.09.17" },
  { title: "Higher", work: "THE SPECIALS OST", date: "2026.02.27" },
];

export default function MusicPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-3">Discography</p>
          <h1 className="text-5xl font-black text-white mb-4">음악</h1>
          <p className="text-gray-400 max-w-md mx-auto">
            르센느의 모든 음악 여정을 담았습니다
            <br />
            <span className="text-xs text-gray-600">2024.03.26 데뷔 ~</span>
          </p>
        </div>

        {/* Albums */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-white mb-6">앨범</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...albums].reverse().map((album) => (
              <div key={album.id} className="glass-card rounded-3xl overflow-hidden hover:border-purple-500/40 transition-all group">
                {/* Album cover */}
                <div className={`relative h-48 bg-gradient-to-br ${album.color} flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative text-center">
                    <Music size={40} className="text-white/60 mx-auto mb-2" />
                    <p className="text-white/70 text-xs font-medium">{album.releaseDate}</p>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-xl font-black text-white">{album.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full border flex-shrink-0 ${typeColors[album.type]}`}>
                      {album.type}
                    </span>
                  </div>

                  <div className="border-t border-gray-800 pt-4">
                    <p className="text-xs text-gray-600 uppercase tracking-widest mb-2">트랙 리스트</p>
                    <ol className="space-y-1.5">
                      {album.tracks.map((track, i) => (
                        <li
                          key={track.title}
                          className="flex items-center gap-2.5 py-1 px-2 rounded-lg hover:bg-white/5 transition-colors"
                        >
                          <span className="text-gray-700 text-xs w-4 text-right flex-shrink-0">{i + 1}</span>
                          <span className={`text-sm flex-1 ${track.isTitle ? "text-purple-300 font-semibold" : "text-gray-300"}`}>
                            {track.title}
                          </span>
                          {track.isTitle && (
                            <span className="text-xs bg-purple-600/30 text-purple-300 px-1.5 py-0.5 rounded-full flex-shrink-0">
                              타이틀
                            </span>
                          )}
                        </li>
                      ))}
                    </ol>
                  </div>

                  {album.mvLink && (
                    <a
                      href={album.mvLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-sm text-gray-300 hover:text-white border border-white/5 hover:border-white/20"
                    >
                      <ExternalLink size={14} />
                      MV 보러가기
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OST */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-white mb-6">OST 참여</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {oстТracks.map((ost) => (
              <div key={ost.title} className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:border-purple-500/40 transition-all">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-700 to-pink-700 flex items-center justify-center flex-shrink-0">
                  <Music size={16} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white text-sm truncate">{ost.title}</p>
                  <p className="text-xs text-gray-500 truncate">{ost.work}</p>
                </div>
                <span className="text-xs text-gray-600 flex-shrink-0">{ost.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Japanese releases */}
        <div>
          <h2 className="text-xl font-bold text-white mb-6">일본어 버전</h2>
          <div className="glass-card rounded-2xl p-5">
            <ul className="divide-y divide-gray-800">
              {[
                { title: "YoYo (Japanese ver.)", date: "2024.08.16" },
                { title: "UhUh (Japanese ver.)", date: "2024.12.04" },
                { title: "Pinball (Japanese ver.)", date: "2026.01.21" },
              ].map((item) => (
                <li key={item.title} className="flex items-center justify-between py-3 text-sm">
                  <span className="text-gray-300">{item.title}</span>
                  <span className="text-gray-600">{item.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Streaming links */}
        <div className="mt-12 glass-card rounded-2xl p-6 text-center">
          <p className="text-gray-400 text-sm mb-4">음원 스트리밍 바로가기</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Spotify", href: "https://open.spotify.com/artist/5deOsjuFTKrNMJW3rKuL8S" },
              { label: "Apple Music", href: "https://music.apple.com/us/artist/rescene/1732658659" },
              { label: "YouTube Music", href: "https://www.youtube.com/@RESCENE_official" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:text-white hover:border-purple-500/40 transition-all"
              >
                <ExternalLink size={12} />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
