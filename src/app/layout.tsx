import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Godswill Ezihe',
  description: 'Software engineer building onchain and AI-native apps',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(fontMono.variable, fontSans.variable)}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider enableSystem defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
