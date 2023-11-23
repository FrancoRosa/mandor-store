import './globals.css'


export const metadata = {
  title: 'Mandor store',
  description: 'Home',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
