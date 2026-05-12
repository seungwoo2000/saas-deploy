import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-brand-primary/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          승우 AI와 함께 <span className="text-gradient">더 빠르게 더 잘</span> 쓰세요
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
          아이디어를 몇 초 만에 완성된 콘텐츠로 바꿔보세요.
          문맥을 이해하는 지능형 AI가 당신의 창의성을 극대화합니다.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="btn-primary w-full sm:w-auto">
            무료 체험 시작
          </button>
          <button className="btn-outline w-full sm:w-auto">
            데모 보기
          </button>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Monitor Frame Mockup */}
          <div className="relative rounded-2xl border border-white/10 bg-black/50 p-2 shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent z-10 opacity-60" />
            <Image
              src="/hero-mockup.png"
              alt="WriteFlow Interface"
              width={1200}
              height={675}
              className="rounded-xl w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-accent/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand-secondary/20 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
}
