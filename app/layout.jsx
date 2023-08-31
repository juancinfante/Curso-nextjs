import Navbar from "../components/Navbar"
import {
  Roboto
} from 'next/font/google'

import './globals.css';
export const metadata = {
  title: 'My App',
  description: 'Generated by Next.js',
}

const roboto = Roboto({
  weight: ["300"],
  styles: ["italic", "cursive"],
  subsets: ["latin"]
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}