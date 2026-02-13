function Header() {
  return (
    <header style={{
      backgroundColor: 'white',
      borderBottom: '1px solid #e0e0e0',
      padding: '15px 0'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #0088cc 0%, #005f99 100%)',
            clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '0',
              height: '0',
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderBottom: '12px solid #ffc107'
            }} />
          </div>
          <div>
            <div style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#0088cc',
              letterSpacing: '1px'
            }}>
              COBRA
            </div>
            <div style={{
              fontSize: '10px',
              color: '#666',
              letterSpacing: '2px',
              marginTop: '-4px'
            }}>
              DENTAL
            </div>
          </div>
        </div>

        <nav style={{
          display: 'flex',
          gap: '25px',
          flexWrap: 'wrap',
          alignItems: 'center',
          fontSize: '14px'
        }}>
          <a href="#" style={{ color: '#666', transition: 'color 0.3s' }}>Produk</a>
          <a href="#" style={{ color: '#666', transition: 'color 0.3s' }}>Store Location</a>
          <a href="#" style={{ color: '#666', transition: 'color 0.3s' }}>Event & Education</a>
          <a href="#" style={{ color: '#666', transition: 'color 0.3s' }}>After Sales Services</a>
          <a href="#" style={{ color: '#666', transition: 'color 0.3s' }}>Cobra Club</a>
          <a href="#" style={{ color: '#666', transition: 'color 0.3s' }}>Blogs</a>
          <a href="#" style={{ color: '#666', transition: 'color 0.3s' }}>Contact Us</a>
          <a href="#" style={{ color: '#666', transition: 'color 0.3s' }}>About Us</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
