import './globals.css';

const themeBootstrap = `
try {
  var raw = localStorage.getItem('matt-theme-store');
  if (!raw) return;
  var data = JSON.parse(raw);
  if (data && data.state && data.state.theme === 'dark') {
    document.documentElement.classList.add('dark');
  }
} catch (e) {}
`;

export const metadata = {
  title: 'Matt Casagrande',
  description: 'Matias Casagrande — Full Stack Web Developer & Graphic Designer',
  manifest: '/mattcasagrande/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-zinc-900 antialiased transition-colors duration-200 dark:bg-zinc-950 dark:text-zinc-100">
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
        {children}
      </body>
    </html>
  );
}
