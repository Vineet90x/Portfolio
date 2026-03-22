import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dev Portfolio — Full-Stack Developer",
  description:
    "Full-stack developer portfolio. I build performant, scalable web applications with modern tech stacks. React, Next.js, Node.js, TypeScript, and more.",
  openGraph: {
    title: "Dev Portfolio — Full-Stack Developer",
    description:
      "I build things that work. Full-stack developer specializing in modern web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "var(--color-surface)",
                color: "var(--color-foreground)",
                border: "1px solid var(--color-border)",
                fontFamily: "var(--font-mono)",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
