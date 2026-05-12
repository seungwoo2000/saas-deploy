"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "개인 창작자를 위한 기본 도구",
    features: ["월 5,000자 생성", "기본 템플릿 제공", "1개 프로젝트"],
    cta: "시작하기",
    popular: false,
  },
  {
    name: "Pro",
    price: "18",
    description: "전문 작가 및 마케터를 위한 강력한 기능",
    features: ["무제한 단어 생성", "고급 AI 모델 액세스", "브랜드 목소리 커스텀", "우선 지원 서비스"],
    cta: "무료 체험 시작",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "45",
    description: "대규모 팀과 기업을 위한 맞춤형 솔루션",
    features: ["팀 관리 대시보드", "API 액세스", "SSO 보안 지원", "전담 매니저 배치"],
    cta: "문의하기",
    popular: false,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">합리적인 요금제</h2>
          
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isYearly ? "text-white" : "text-gray-500"}`}>월간 결제</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 rounded-full bg-bg-card border border-white/10 p-1 transition-colors"
            >
              <div className={`w-5 h-5 rounded-full bg-brand-primary transition-transform duration-300 ${isYearly ? "translate-x-7" : "translate-x-0"}`} />
            </button>
            <span className={`text-sm ${isYearly ? "text-white" : "text-gray-500"}`}>연간 결제 <span className="text-brand-accent font-semibold">(20% 할인)</span></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                plan.popular 
                  ? "border-brand-primary bg-bg-card-hover shadow-[0_0_40px_rgba(109,40,217,0.2)] scale-105 z-10" 
                  : "border-white/5 bg-bg-card hover:border-white/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  가장 인기
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-bold">${isYearly ? (parseFloat(plan.price) * 0.8).toFixed(0) : plan.price}</span>
                  <span className="text-gray-500 text-sm">/month</span>
                </div>
                {isYearly && plan.price !== "0" && (
                  <p className="text-brand-accent text-xs mt-1">연간 결제 시 할인 적용</p>
                )}
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start space-x-3 text-sm text-gray-400">
                    <Check className="w-5 h-5 text-brand-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                plan.popular 
                  ? "btn-primary" 
                  : "btn-outline"
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
