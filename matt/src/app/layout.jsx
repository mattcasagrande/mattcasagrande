import { Roboto } from 'next/font/google';
import Navbar from '@/components/Nav/Navbar.jsx';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

const themeBootstrap = `
(function () {
  try {
    var raw = localStorage.getItem('matt-theme-store');
    if (!raw) {
      document.documentElement.classList.add('dark');
      return;
    }
    var data = JSON.parse(raw);
    var t = data && data.state ? data.state.theme : null;
    if (t === 'light') document.documentElement.classList.remove('dark');
    else document.documentElement.classList.add('dark');
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export const metadata = {
  title: 'Matt Casagrande',
  description: 'Matias Casagrande — Full Stack Web Developer & Graphic Designer',
  manifest: '/mattcasagrande/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={roboto.variable}>
      <body className="flex min-h-screen flex-col overflow-x-hidden scroll-smooth bg-white font-sans text-zinc-900 antialiased transition-colors duration-200 dark:bg-zinc-950 dark:text-zinc-100">
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
        <Navbar />
        <div className="min-h-0 min-w-0 flex-1">{children}</div>
      </body>
    </html>
  );
}
