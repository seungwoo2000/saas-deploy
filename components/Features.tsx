import { 
  PenTool, 
  CheckCircle, 
  Volume2, 
  Globe, 
  Layout, 
  Users 
} from "lucide-react";

const features = [
  {
    title: "AI 글쓰기 어시스턴트",
    description: "문맥을 파악하여 다음 문장을 제안하고 글의 흐름을 자연스럽게 이어갑니다.",
    icon: PenTool,
  },
  {
    title: "언제나 완벽한 문법",
    description: "단순한 오타 교정을 넘어 스타일과 톤에 맞는 세련된 문장 구조를 추천합니다.",
    icon: CheckCircle,
  },
  {
    title: "브랜드 목소리 조절",
    description: "격식 있는 비즈니스 톤부터 친근한 블로그 스타일까지 자유롭게 설정하세요.",
    icon: Volume2,
  },
  {
    title: "50개 이상 언어 지원",
    description: "전 세계 어디서든 소통할 수 있도록 다양한 언어로 고품질 콘텐츠를 생성합니다.",
    icon: Globe,
  },
  {
    title: "100개 이상 템플릿",
    description: "이메일, 블로그, 광고 카피 등 목적에 맞는 최적화된 템플릿을 제공합니다.",
    icon: Layout,
  },
  {
    title: "실시간 협업",
    description: "팀원들과 함께 문서를 편집하고 AI의 도움을 받아 아이디어를 발전시키세요.",
    icon: Users,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-bg-deep relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">최첨단 작문 도구의 힘</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            창작 프로세스의 모든 단계를 지원하는 강력한 기능들을 확인해 보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl border border-white/5 bg-bg-card hover:bg-bg-card-hover transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:bg-brand-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
