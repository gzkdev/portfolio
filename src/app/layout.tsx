import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Footer } from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(fontMono.variable, inter.variable)}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider enableSystem defaultTheme="light">
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
