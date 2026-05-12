"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "WriteFlow는 한국어를 완벽하게 지원하나요?",
    answer: "네, WriteFlow는 한국어 문맥과 문법을 완벽하게 이해하도록 훈련되었습니다. 자연스러운 문장 구성은 물론, 한국 정서에 맞는 글쓰기가 가능합니다.",
  },
  {
    question: "작성된 글의 저작권은 누구에게 있나요?",
    answer: "WriteFlow를 통해 생성된 모든 콘텐츠의 저작권은 사용자에게 있습니다. 상업적인 용도로 자유롭게 사용하실 수 있습니다.",
  },
  {
    question: "기존에 작성한 글의 톤앤매너를 학습시킬 수 있나요?",
    answer: "Pro 플랜 이상부터는 '브랜드 목소리' 기능을 통해 사용자의 기존 글을 분석하고 그에 맞는 스타일로 글을 작성하도록 설정할 수 있습니다.",
  },
  {
    question: "무료 체험 기간은 얼마인가요?",
    answer: "Pro 플랜의 경우 7일간의 무료 체험 기간을 제공합니다. 체험 기간 종료 전까지는 언제든 비용 발생 없이 취소가 가능합니다.",
  },
  {
    question: "팀 단위 결제가 가능한가요?",
    answer: "네, Enterprise 플랜을 통해 팀 단위 결제 및 통합 관리 기능을 제공합니다. 자세한 내용은 문의하기를 통해 확인해 주세요.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-bg-deep">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">자주 묻는 질문</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-white/5 rounded-2xl overflow-hidden bg-bg-card"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-bg-card-hover transition-colors"
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6 text-gray-400 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
