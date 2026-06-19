"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { members } from "@/lib/data";
import { ChevronRight, RotateCcw } from "lucide-react";

type MemberId = "woni" | "liv" | "minami" | "may" | "zena";

const questions: { q: string; options: { label: string; memberId: MemberId }[] }[] = [
  {
    q: "주말 오후, 나는 보통 뭘 하고 있을까?",
    options: [
      { label: "친구들과 약속 잡고 에너지 넘치게 놀기", memberId: "may" },
      { label: "좋아하는 음악 들으며 감성에 잠기기", memberId: "liv" },
      { label: "새로운 언어나 취미를 혼자 배우기", memberId: "minami" },
      { label: "주변 사람들 챙기며 조용히 쉬기", memberId: "woni" },
      { label: "무대 영상 보며 퍼포먼스 연구하기", memberId: "zena" },
    ],
  },
  {
    q: "나의 가장 큰 매력은?",
    options: [
      { label: "든든하고 믿음직스러운 리더십", memberId: "woni" },
      { label: "감성적이고 공감 잘 하는 따뜻함", memberId: "liv" },
      { label: "글로벌 감각과 다재다능함", memberId: "minami" },
      { label: "발랄하고 넘치는 에너지", memberId: "may" },
      { label: "강렬한 존재감과 임팩트", memberId: "zena" },
    ],
  },
  {
    q: "그룹에서 내 역할은?",
    options: [
      { label: "분위기 조율하는 든든한 리더", memberId: "woni" },
      { label: "감성 담당 보컬, 모두의 힐링", memberId: "liv" },
      { label: "다국적 감각의 멀티 플레이어", memberId: "minami" },
      { label: "활기 넘치는 에너지 퍼포머", memberId: "may" },
      { label: "비주얼 센터, 시선을 사로잡는 막내", memberId: "zena" },
    ],
  },
  {
    q: "가장 끌리는 계절 분위기는?",
    options: [
      { label: "봄 — 따뜻하고 새로운 시작", memberId: "woni" },
      { label: "여름 — 감성적이고 풍요로운 느낌", memberId: "liv" },
      { label: "가을 — 낭만적이고 서정적인 분위기", memberId: "minami" },
      { label: "여름 — 에너지 넘치고 자유로운 시즌!", memberId: "may" },
      { label: "겨울 — 강렬하고 신비로운 분위기", memberId: "zena" },
    ],
  },
  {
    q: "르센느 앨범 중 가장 끌리는 분위기는?",
    options: [
      { label: "Re:Scene — 안정감 있고 진중한", memberId: "woni" },
      { label: "Glow Up — 따뜻하고 감성적인", memberId: "liv" },
      { label: "SCENEDROME — 다채롭고 다이나믹한", memberId: "minami" },
      { label: "Runaway — 밝고 자유로운", memberId: "may" },
      { label: "lip bomb — 강렬하고 임팩트 있는", memberId: "zena" },
    ],
  },
];

export default function MemberTestPage() {
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Partial<Record<MemberId, number>>>({});
  const [finished, setFinished] = useState(false);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    setLocked(false);
  }, [current]);

  const handleSelect = (memberId: MemberId) => {
    if (locked || finished) return;
    setLocked(true);
    const newScores = { ...scores, [memberId]: (scores[memberId] ?? 0) + 1 };
    setScores(newScores);

    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
    } else {
      setFinished(true);
    }
  };

  const getResult = () => {
    const sorted = Object.entries(scores).sort(([, a], [, b]) => b - a);
    const winnerId = sorted[0]?.[0] ?? "woni";
    return members.find((m) => m.id === winnerId) ?? members[0];
  };

  const handleReset = () => {
    setCurrent(0);
    setScores({});
    setFinished(false);
    setLocked(false);
  };

  if (finished) {
    const result = getResult();
    return (
      <div className="min-h-screen pt-24 pb-20">
        <div className="max-w-xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-3">Result</p>
            <h1 className="text-4xl font-black text-white mb-2">나와 닮은 멤버는?</h1>
            <p className="text-gray-400 text-sm">결과를 확인해 보세요!</p>
          </div>

          <div
            className="glass-card rounded-3xl p-10 text-center mb-6"
            style={{ borderColor: `${result.color}40` }}
          >
            <div
              className={`w-32 h-32 rounded-full mx-auto mb-6 bg-gradient-to-br ${result.gradient} flex items-center justify-center text-6xl shadow-2xl`}
              style={{ boxShadow: `0 0 60px ${result.color}50` }}
            >
              {result.emoji}
            </div>
            <p className="text-gray-400 text-sm mb-1">{result.name}</p>
            <h2 className="text-5xl font-black text-white mb-4">{result.nameKr}</h2>
            <p className="text-gray-300 leading-relaxed text-sm mb-6">{result.bio}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {result.facts.map((fact) => (
                <span
                  key={fact}
                  className="text-xs px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: `${result.color}20`, color: result.color }}
                >
                  {fact}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleReset}
              className="flex-1 flex items-center justify-center gap-2 py-3 glass-card rounded-xl text-white hover:border-purple-500/40 transition-all"
            >
              <RotateCcw size={16} />
              다시 해보기
            </button>
            <Link
              href="/quiz"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold hover:opacity-90 transition-all"
            >
              르센느 퀴즈 풀기
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-3">Member Test</p>
          <h1 className="text-4xl font-black text-white mb-2">나와 닮은 멤버는?</h1>
          <p className="text-gray-400 text-sm">5가지 질문으로 나와 가장 잘 맞는 르센느 멤버를 찾아봐요!</p>
        </div>

        <div className="flex items-center gap-3 mb-8">
          <span className="text-sm text-gray-500">{current + 1} / {questions.length}</span>
          <div className="flex-1 bg-gray-800 rounded-full h-2">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300"
              style={{ width: `${((current + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="glass-card rounded-3xl p-8">
          <p className="text-xs text-purple-400 font-medium uppercase tracking-widest mb-4">Q{current + 1}</p>
          <h2 className="text-xl font-bold text-white mb-8 leading-relaxed">{questions[current].q}</h2>

          <div className="space-y-3">
            {questions[current].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(opt.memberId)}
                disabled={locked}
                className="w-full text-left px-5 py-4 rounded-xl border border-transparent glass-card text-gray-300 hover:border-purple-500/40 hover:text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="text-sm font-medium">{opt.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          {members.map((m) => (
            <div key={m.id} className="flex flex-col items-center gap-1.5">
              <div
                className="w-2.5 h-2.5 rounded-full opacity-25"
                style={{ backgroundColor: m.color }}
              />
              <span className="text-xs text-gray-700">{m.nameKr}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
