import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "React Card",
  description: "Teste do css-in-js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
