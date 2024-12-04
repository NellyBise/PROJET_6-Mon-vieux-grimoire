import { Roboto } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const police = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Mon nouveau grimoire',
  description: 'Une application de notation de livres',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${police.className} min-h-screen scroll-smooth flex flex-col`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
