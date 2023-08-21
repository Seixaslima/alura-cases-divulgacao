export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body style={{ textAlign: 'center' }}>{children}</body>
    </html>
  )
}