import { SandPackCSS } from "@/components/sandpack-styles";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="bg-[#27374d] text-gray-50">
      <head>
        <SandPackCSS />
      </head>
      <body>{children}</body>
    </html>
  );
}
