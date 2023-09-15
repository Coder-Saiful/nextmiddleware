import Navbar from '@/components/Navbar/Navbar'
import './globals.css'

export const metadata = {
  title: 'Next JS Middleware',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
