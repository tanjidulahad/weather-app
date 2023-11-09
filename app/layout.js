import './globals.css'
import { Roboto } from 'next/font/google'

const roboto=Roboto({
  weight: ["400", "100", "300", "500", "700", "900"],
  subsets: ['latin'],
  display: 'swap',
})


export const metadata = {
  title: 'Weather App',
  description: 'A custom made fully functional weather app.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
