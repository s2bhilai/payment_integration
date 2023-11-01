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
          {children}
        </ProductsContextProvider>
      </body>
    </html>
  )
}
