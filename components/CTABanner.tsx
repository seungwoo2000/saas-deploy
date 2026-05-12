export default function CTABanner() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="relative rounded-[40px] overflow-hidden bg-gradient-premium p-12 md:p-24 text-center">
          {/* Subtle patterns */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} 
          />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              글쓰기를 혁신할 <br className="hidden md:block" /> 준비가 되셨나요?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              10,000명 이상의 작가와 마케터가 이미 WriteFlow와 함께 <br className="hidden md:block" /> 창의적인 콘텐츠를 만들고 있습니다.
            </p>
            
            <div className="flex flex-col items-center space-y-4">
              <button className="px-10 py-4 rounded-2xl bg-white text-brand-primary font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-xl">
                무료 체험 시작
              </button>
              <p className="text-white/60 text-xs">신용카드 필요 없음</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
