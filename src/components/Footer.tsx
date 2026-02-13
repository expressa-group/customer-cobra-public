function Footer() {
  return (
    <footer style={{
      backgroundColor: '#0088cc',
      color: 'white',
      padding: '50px 20px 30px',
      marginTop: '60px'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '40px',
        marginBottom: '30px'
      }}>
        <div>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '20px',
            letterSpacing: '0.5px'
          }}>
            ABOUT COBRA DENTAL
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '12px' }}>
              <a href="#" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>E-BROCHURE</a>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <a href="#" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>CAREERS</a>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <a href="#" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>FAQ</a>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <a href="#" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>TERMS & CONDITION</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '20px',
            letterSpacing: '0.5px'
          }}>
            BLOG
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '12px' }}>
              <a href="#" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>COVID-19</a>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <a href="#" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>CLINIC MANAGEMENT TIPS</a>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <a href="#" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>TIPS & TRICK AT HOME</a>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <a href="#" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>EVENTS & EDUCATION</a>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <a href="#" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>DENTAL ENTERPREUNERSHIP</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '20px',
            letterSpacing: '0.5px'
          }}>
            MORE WAYS TO SHOP
          </h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '12px' }}>
              <a href="#" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>STORE LOCATOR</a>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <a href="#" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>SHOP ONLINE</a>
            </li>
            <li style={{ marginBottom: '12px' }}>
              <a href="#" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>OUR BRAND PARTNER</a>
            </li>
          </ul>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.2)',
        paddingTop: '20px',
        textAlign: 'center',
        fontSize: '13px',
        color: 'rgba(255,255,255,0.8)'
      }}>
        <p>&copy; 2024 Cobra Dental Indonesia. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
