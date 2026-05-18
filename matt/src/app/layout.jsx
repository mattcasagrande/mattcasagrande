import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

export const metadata = {
  title: 'Matt Casagrande',
  description: 'Matias Casagrande — Full Stack Web Developer & Graphic Designer',
  manifest: '/mattcasagrande/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
