import '../css/globals.scss'
import { Noto_Serif_NP_Hmong } from 'next/font/google'

const notoserif = Noto_Serif_NP_Hmong({ 
  weight: '400',
  subsets: ['latin'],
 })

export const metadata = {
  title: 'Margarida Pereira - Web Developer',
  description: 'Margarida Pereira - Web Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={notoserif.className}>{children}</body>
    </html>
  )
}
