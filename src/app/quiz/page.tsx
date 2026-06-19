"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, XCircle, ChevronRight, RotateCcw, Trophy } from "lucide-react";

const questions = [
  {
    q: "르센느의 데뷔일은 언제인가요?",
    options: ["2024.01.01", "2024.03.26", "2023.11.15", "2024.06.01"],
    answer: 1,
    hint: "Re:Scene 싱글 발매일",
  },
  {
    q: "르센느의 소속사는?",
    options: ["HYBE", "SM Entertainment", "THE MUZE Entertainment", "JYP Entertainment"],
    answer: 2,
    hint: "더뮤즈엔터테인먼트",
  },
  {
    q: "르센느의 공식 팬덤명은?",
    options: ["MENT", "REMINE", "SCENELY", "RESCENE"],
    answer: 1,
    hint: "리마인 — 2024년 7월 10일 공식 발표",
  },
  {
    q: "르센느의 첫 미니앨범 제목은?",
    options: ["Re:Scene", "Glow Up", "SCENEDROME", "lip bomb"],
    answer: 2,
    hint: "2024년 8월 27일 발매",
  },
  {
    q: "미나미(Minami)는 어느 나라 출신인가요?",
    options: ["한국", "중국", "일본", "태국"],
    answer: 2,
    hint: "르센느의 유일한 외국인 멤버",
  },
  {
    q: "제나(Zena)가 출연한 오디션 프로그램은?",
    options: ["MBC 나의 빛나는 소녀", "Produce 48", "Channel A 별들의 전쟁", "넥스트 아이돌"],
    answer: 2,
    hint: "데뷔 전 주목받은 오디션",
  },
  {
    q: "미니 3집 'lip bomb'의 초동 판매량은?",
    options: ["5만 장", "10만 장", "20만 장", "50만 장"],
    answer: 1,
    hint: "그룹 사상 최고 초동 기록",
  },
  {
    q: "2024년 그래미가 선정한 K-POP 노래 10선에 오른 르센느 곡은?",
    options: ["UhUh", "Pinball", "LOVE ATTACK", "Glow Up"],
    answer: 2,
    hint: "2024 K-POP 노래 10선",
  },
  {
    q: "르센느 멤버 중 최연장자는?",
    options: ["리브", "원이", "미나미", "메이"],
    answer: 1,
    hint: "2004년생 리더",
  },
  {
    q: "'Runaway'의 발매 형식은?",
    options: ["싱글앨범", "미니앨범", "정규앨범", "디지털싱글"],
    answer: 3,
    hint: "2026년 4월 발매",
  },
];

const SCORE_LEVELS = [
  { min: 100, msg: "완벽한 르마인! 🏆 르센느 박사 인정!", color: "text-yellow-400" },
  { min: 80, msg: "진짜 르마인이네요! 💜 르센느를 정말 잘 알고 있어요", color: "text-purple-400" },
  { min: 60, msg: "꽤 아네요! 🌟 조금만 더 파보면 완벽 르마인!", color: "text-cyan-400" },
  { min: 40, msg: "입덕 준비 중? 🌸 더 알아갈수록 빠져들 거예요", color: "text-pink-400" },
  { min: 0, msg: "르센느를 알아가는 시작이에요! 🫧 화이팅!", color: "text-gray-400" },
];

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));

  const question = questions[current];
  const isAnswered = selected !== null;
  const isCorrect = selected === question.answer;

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelected(idx);
    const newAnswers = [...answers];
    newAnswers[current] = idx;
    setAnswers(newAnswers);
    if (idx === question.answer) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const handleReset = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setAnswers(Array(questions.length).fill(null));
  };

  const percent = Math.round((score / questions.length) * 100);
  const result = SCORE_LEVELS.find((l) => percent >= l.min) ?? SCORE_LEVELS[SCORE_LEVELS.length - 1];

  if (finished) {
    return (
      <div className="min-h-screen pt-24 pb-20">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-purple-900/40">
              <Trophy className="text-white" size={36} />
            </div>
            <h1 className="text-4xl font-black text-white mb-2">퀴즈 완료!</h1>
            <p className="text-gray-400 text-sm">결과를 확인해 보세요</p>
          </div>

          <div className="glass-card rounded-3xl p-8 text-center mb-5">
            <p className="text-gray-400 text-sm mb-2">{questions.length}문제 중</p>
            <p className="text-7xl font-black text-white mb-1">{score}</p>
            <p className="text-purple-300 text-lg font-semibold mb-4">정답 ({percent}%)</p>
            <p className={`text-lg font-bold ${result.color}`}>{result.msg}</p>
            <div className="mt-6 w-full bg-gray-800 rounded-full h-3">
              <div
                className="h-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-700"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 mb-5">
            <h3 className="text-white font-bold mb-4">문제별 결과</h3>
            <div className="space-y-2">
              {questions.map((q, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-xs text-gray-600 w-5 text-right flex-shrink-0">{i + 1}</span>
                  {answers[i] === q.answer ? (
                    <CheckCircle size={15} className="text-green-400 flex-shrink-0" />
                  ) : (
                    <XCircle size={15} className="text-red-400 flex-shrink-0" />
                  )}
                  <span className="text-sm text-gray-400 flex-1 truncate">{q.q}</span>
                  {answers[i] !== q.answer && (
                    <span className="text-xs text-green-400 flex-shrink-0">정답: {q.options[q.answer]}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleReset}
              className="flex-1 flex items-center justify-center gap-2 py-3 glass-card rounded-xl text-white hover:border-purple-500/40 transition-all"
            >
              <RotateCcw size={16} />
              다시 풀기
            </button>
            <Link
              href="/member-test"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold hover:opacity-90 transition-all"
            >
              멤버 테스트 해보기
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-purple-400 text-sm font-medium uppercase tracking-widest mb-3">Quiz</p>
          <h1 className="text-4xl font-black text-white mb-2">르센느 퀴즈</h1>
          <p className="text-gray-400 text-sm">나는 진짜 르마인? 르센느 지식을 테스트해봐요!</p>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <span className="text-sm text-gray-500">{current + 1} / {questions.length}</span>
          <div className="flex-1 bg-gray-800 rounded-full h-2">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300"
              style={{ width: `${((current + 1) / questions.length) * 100}%` }}
            />
          </div>
          <span className="text-sm text-purple-300 font-semibold">{score}점</span>
        </div>

        <div className="glass-card rounded-3xl p-8 mb-4">
          <p className="text-xs text-purple-400 font-medium uppercase tracking-widest mb-4">Q{current + 1}</p>
          <h2 className="text-xl font-bold text-white mb-8 leading-relaxed">{question.q}</h2>

          <div className="space-y-3">
            {question.options.map((option, idx) => {
              let style =
                "border border-transparent glass-card text-gray-300 hover:border-purple-500/40 hover:text-white cursor-pointer";
              if (isAnswered) {
                if (idx === question.answer) {
                  style = "border border-green-500/50 bg-green-900/20 text-green-300";
                } else if (idx === selected) {
                  style = "border border-red-500/50 bg-red-900/20 text-red-300";
                } else {
                  style = "border border-transparent opacity-40 glass-card text-gray-500 cursor-not-allowed";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={isAnswered && idx !== selected && idx !== question.answer}
                  className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-200 ${style}`}
                >
                  <span className="text-sm font-medium">
                    <span className="text-gray-600 mr-2">{String.fromCharCode(65 + idx)}.</span>
                    {option}
                  </span>
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div
              className={`mt-5 p-3 rounded-xl flex items-center gap-2 ${
                isCorrect
                  ? "bg-green-900/20 border border-green-500/30"
                  : "bg-red-900/20 border border-red-500/30"
              }`}
            >
              {isCorrect ? (
                <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
              ) : (
                <XCircle size={16} className="text-red-400 flex-shrink-0" />
              )}
              <p className={`text-sm font-medium ${isCorrect ? "text-green-300" : "text-red-300"}`}>
                {isCorrect ? "정답이에요! 🎉" : `오답! 정답: ${question.options[question.answer]}`}
              </p>
              <span className="text-xs text-gray-600 ml-auto">{question.hint}</span>
            </div>
          )}
        </div>

        {isAnswered && (
          <button
            onClick={handleNext}
            className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold hover:opacity-90 transition-all"
          >
            {current < questions.length - 1 ? "다음 문제" : "결과 보기"}
            <ChevronRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
