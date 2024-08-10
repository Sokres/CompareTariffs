import type { Metadata } from 'next'
import { CaviarDreams } from './styles/font'
import './index.css'
import cn from 'classnames'
import Layout from '@/components/Layout'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Metadata',
    description: 'Metadata',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru' className={CaviarDreams.className}>
      <body className={cn('body')}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
