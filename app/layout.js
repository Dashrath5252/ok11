import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OK11 Game APK Download - Official website | ₹500 Bonus',
  description: 'ok11 Game offers exciting slot games for entertainment. Play fun games online. Download now and enjoy amazing gaming experience.',
  authors: [{ name: 'ok11 Game' }],
  robots: 'index, follow, max-image-preview:large',
  openGraph: {
    type: 'website',
    url: 'https://www.yonogamez.com/',
    title: 'ok11 Game APK - official website ok11 game| Free Android,Ios and Pc Game',
    description: 'Free download ok11 Game APK for Android. Get ₹500 welcome bonus! Play 100+ games including slots, poker, fishing, and roulette. Safe & secure entertainment gaming.',
    images: [
      {
        url: 'https://www.yonogamez.com/ok11icon512.webp',
        width: 512,
        height: 512,
        alt: 'ok11 Game APK Download Icon - Get ₹500 Bonus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ok11game',
    creator: '@ok11game',
    title: 'OK11 Game APK Download - Free ₹500 Bonus',
    description: 'Download ok11 Game APK for free! Get ₹500 welcome bonus. Play slots, poker, fishing & roulette games. 100% safe Android entertainment.',
    images: ['https://www.yonogamez.com/ok11icon512.webp'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" sizes="48x48" href="ok11icon48.webp" width="48" height="48" />
        <link rel="apple-touch-icon" sizes="180x180" href="ok11icon180.webp" width="180" height="180" />
        <link rel="icon" href="ok11icon180.webp" type="image/webp" width="180" height="180" />
        <link rel="canonical" href="https://www.yonogamez.com/" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
