interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <main style={{ flex: 1 }}>
        {children}
      </main>
    </div>
  )
}

export default Layout
