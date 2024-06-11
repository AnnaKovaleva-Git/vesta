import type { Metadata } from 'next'
import { Inter as font } from 'next/font/google'
import './globals.css'
import { Footer } from '@components/Footer'
import { px2vw } from '@functions/px2vw'
import { vars } from '@config/vars'
import { Header } from '@/components/Header'

const inter = font({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = vars.metadata

// eslint-disable-next-line import/no-default-export
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  flex flex-col items-center justify-center bg-background`}>
        <Header />
        <div
          className="flex w-full flex-col"
          style={{ marginBottom: px2vw(96) }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
