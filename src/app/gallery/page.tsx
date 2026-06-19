"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { members, albums, getYouTubeVideoId, getYouTubeThumbnail } from "@/lib/data";
import FallbackImage from "@/components/FallbackImage";

const galleryItems = [
  { id: 1, memberId: "woni", tag: "공방", era: "SCENEDROME", large: true },
  { id: 2, memberId: "minami", tag: "직캠", era: "Glow Up", large: false },
  { id: 3, memberId: "zena", tag: "화보", era: "lip bomb", large: false },
  { id: 4, memberId: "liv", tag: "비하인드", era: "SCENEDROME", large: true },
  { id: 5, memberId: "may", tag: "공방", era: "Glow Up", large: false },
  { id: 6, memberId: "woni", tag: "직캠", era: "lip bomb", large: false },
  { id: 7, memberId: "liv", tag: "화보", era: "Re:Scene", large: false },
  { id: 8, memberId: "minami", tag: "비하인드", era: "Glow Up", large: false },
  { id: 9, memberId: "zena", tag: "직캠", era: "Re:Scene", large: false },
  { id: 10, memberId: "may", tag: "화보", era: "lip bomb", large: false },
  { id: 11, memberId: "woni", tag: "비하인드", era: "Glow Up", large: false },
  { id: 12, memberId: "liv", tag: "공방", era: "lip bomb", large: false },
  { id: 13, memberId: "zena", tag: "공방", era: "SCENEDROME", large: false },
  { id: 14, memberId: "may", tag: "직캠", era: "Re:Scene", large: false },
  { id: 15, memberId: "minami", tag: "화보", era: "lip bomb", large: false },
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

const mvVideos = albums
  .filter((a) => a.mvLink)
  .map((album) => {
    const videoId = getYouTubeVideoId(album.mvLink!)!;
    return {
      id: album.id,
      title: album.title,
      releaseDate: album.releaseDate,
      type: album.type,
      thumbnailUrl: getYouTubeThumbnail(videoId),
      sourceUrl: album.mvLink!,
      color: album.color,
    };
  })
  .reverse();

export default function GalleryPage() {
  const [activeMember, setActiveMember] = useState("all");
  const [activeTag, setActiveTag] = useState("전체");

  const memberMap = Object.fromEntries(members.map((m) => [m.id, m]));

  const filtered = galleryItems.filter((item) => {
    const memberMatch = activeMember === "all" || item.memberId === activeMember;
    const tagMatch = activeTag === "전체" || item.tag === activeTag;
    return memberMatch && tagMatch;
  });

  return (
    <div className="min-h-screen pt-24 pb-32 xl:pb-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-20 md:mb-28 xl:mb-32">
          <p className="text-purple-400 text-xs sm:text-sm font-medium uppercase tracking-widest mb-3">Gallery</p>
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white mb-5">갤러리</h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto">
            르센느의 소중한 순간들을 모아봤습니다
          </p>
        </div>

        {/* Filters */}
        <div className="space-y-4 sm:space-y-5 mb-12 sm:mb-14">
          {/* Member filter */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {[{ label: "전체", id: "all" }, ...members.map((m) => ({ label: m.nameKr, id: m.id }))].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveMember(tab.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeMember === tab.id
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-900/30"
                    : "glass-card text-gray-400 hover:text-white hover:border-purple-500/40"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tag filter */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {["전체", "공방", "직캠", "화보", "비하인드"].map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeTag === tag
                    ? "bg-purple-600/70 text-white border border-purple-500/60"
                    : "glass-card text-gray-500 hover:text-white hover:border-purple-500/30"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-600 text-sm">해당 조건의 항목이 없습니다.</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {filtered.map((item) => {
              const member = memberMap[item.memberId];
              const isLarge = item.large && activeMember === "all" && activeTag === "전체";
              const bgColor = eraColors[item.era] ?? member?.gradient ?? "from-gray-700 to-gray-800";

              return (
                <div
                  key={item.id}
                  className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
                    isLarge ? "col-span-2 row-span-2" : ""
                  }`}
                >
                  <div
                    className={`w-full ${isLarge ? "h-72 sm:h-80 lg:h-96" : "h-44 sm:h-52"} bg-gradient-to-br ${bgColor} flex items-center justify-center relative`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className={`${isLarge ? "text-5xl sm:text-6xl" : "text-3xl sm:text-4xl"}`}>{member?.emoji}</span>

                    <div className="absolute inset-0 bg-black/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity flex flex-col items-center justify-end p-4">
                      <p className="text-white font-bold text-sm">{member?.nameKr}</p>
                      <p className="text-white/60 text-xs mt-0.5">{item.era}</p>
                    </div>

                    <div className="absolute top-2.5 left-2.5">
                      <span className={`text-xs px-2 py-0.5 rounded-full text-white font-medium ${tagColors[item.tag]}`}>
                        {item.tag}
                      </span>
                    </div>

                    <div className="absolute top-2.5 right-2.5">
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
        )}

        {/* MV & 영상 */}
        <div className="mt-20 sm:mt-24">
          <div className="flex items-center gap-3 mb-7 sm:mb-9">
            <Play size={18} className="text-purple-400 flex-shrink-0" />
            <h2 className="text-lg sm:text-xl font-bold text-white">MV & 영상</h2>
            <span className="text-xs text-gray-600 ml-1">공식 YouTube</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {mvVideos.map((video) => (
              <a
                key={video.id}
                href={video.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all flex flex-col"
              >
                {/* Thumbnail */}
                <div className={`relative h-44 sm:h-48 bg-gradient-to-br ${video.color} flex-shrink-0 overflow-hidden`}>
                  <FallbackImage
                    src={video.thumbnailUrl}
                    alt={`${video.title} MV 썸네일`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <Play size={20} className="text-white ml-0.5" />
                    </div>
                  </div>
                  {/* Type badge */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-black/50 text-white/80 font-medium backdrop-blur-sm">
                      {video.type}
                    </span>
                  </div>
                </div>
                {/* Info */}
                <div className="p-4 sm:p-5">
                  <p className="text-white font-bold text-sm sm:text-base leading-snug">{video.title}</p>
                  <p className="text-gray-500 text-xs mt-1">{video.releaseDate}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Notice */}
        <div className="mt-14 sm:mt-16 glass-card rounded-2xl p-7 sm:p-9 text-center">
          <p className="text-gray-600 text-sm sm:text-base">
            실제 사진은 공식 채널에서 확인할 수 있습니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4">
            {[
              { label: "Instagram", href: "https://www.instagram.com/rescene_official/" },
              { label: "YouTube", href: "https://www.youtube.com/@RESCENE_official" },
              { label: "X (트위터)", href: "https://x.com/RESCENEofficial" },
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
          <p className="text-gray-700 text-xs mt-5">이 페이지는 비공식 팬페이지입니다.</p>
        </div>
      </div>
    </div>
  );
}
