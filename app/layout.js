import { Space_Grotesk } from 'next/font/google';
// import '@fortawesome/fontawesome-svg-core/styles.css';
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'auto',
});

export const metadata = {
  title: "Matteo Cigognini",
  description: "Full Stack Developer in continua evoluzione, sempre alla ricerca di nuove sfide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        {children}
      </body>
    </html>
  );
}