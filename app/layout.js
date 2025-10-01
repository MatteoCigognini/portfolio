import { Mona_Sans } from 'next/font/google';
import '@fortawesome/fontawesome-svg-core/styles.css';
import "./globals.css";

const fontClass = Mona_Sans({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Matteo Cigognini",
  description: "Full Stack Developer in continua evoluzione, sempre alla ricerca di nuove sfide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontClass.className}>
        {children}
      </body>
    </html>
  );
}