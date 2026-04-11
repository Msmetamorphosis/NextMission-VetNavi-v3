import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextMission Navigator | Veteran life planning",
  description:
    "Personalized action plans, trusted resources, and support for U.S. veterans transitioning to civilian life.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="preload"
          href="https://unpkg.com/@elevenlabs/convai-widget-embed"
          as="script"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
