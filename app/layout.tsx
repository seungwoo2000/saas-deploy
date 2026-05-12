import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WriteFlow - AI와 함께 더 빠르게 더 잘 쓰세요",
  description: "아이디어를 몇 초 만에 완성된 콘텐츠로 바꿔보세요. 문맥을 이해하는 지능형 AI가 당신의 창의성을 극대화합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-deep text-foreground">
        {children}
      </body>
    </html>
  );
}

