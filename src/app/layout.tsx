import Header from './components/header/page'
import Hero from './components/hero/page';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Hero />
        {children}
      </body>
    </html>
  )
}
