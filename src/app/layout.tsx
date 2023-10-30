import FeaturedCollection from './components/featured-collection/page';
import Header from './components/header/page'
import Hero from './components/hero/page';
import MainSection from './components/main-section/page';
import ProductsContextProvider from './context/products-context';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ProductsContextProvider>
          <Header />
          <Hero />
          <MainSection />
          <FeaturedCollection />
          {children}
        </ProductsContextProvider>
      </body>
    </html>
  )
}
