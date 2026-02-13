import { useState } from 'react'
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsCondition from './pages/TermsCondition'

type Lang = 'id' | 'en'

function App() {
  const [lang, setLang] = useState<Lang>('id')
  const location = useLocation()

  return (
    <Layout>
      <div style={{ padding: '20px', minHeight: '100vh' }}>
        {/* Navigation & Language Switch */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto 30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '15px'
        }}>
          {/* Page Navigation */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <Link to="/privacy-policy" style={{ textDecoration: 'none' }}>
              <button
                style={{
                  padding: '10px 22px',
                  backgroundColor: location.pathname === '/privacy-policy' ? '#0088cc' : '#f0f0f0',
                  color: location.pathname === '/privacy-policy' ? 'white' : '#555',
                  border: location.pathname === '/privacy-policy' ? '2px solid #0088cc' : '2px solid #ddd',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '14px',
                  transition: 'all 0.2s ease'
                }}
              >
                {lang === 'id' ? 'Kebijakan Privasi' : 'Privacy Policy'}
              </button>
            </Link>
            <Link to="/terms-conditions" style={{ textDecoration: 'none' }}>
              <button
                style={{
                  padding: '10px 22px',
                  backgroundColor: location.pathname === '/terms-conditions' ? '#0088cc' : '#f0f0f0',
                  color: location.pathname === '/terms-conditions' ? 'white' : '#555',
                  border: location.pathname === '/terms-conditions' ? '2px solid #0088cc' : '2px solid #ddd',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '14px',
                  transition: 'all 0.2s ease'
                }}
              >
                {lang === 'id' ? 'Syarat & Ketentuan' : 'Terms & Conditions'}
              </button>
            </Link>
          </div>

          {/* Language Switch */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '2px solid #ddd'
          }}>
            <button
              onClick={() => setLang('id')}
              style={{
                padding: '8px 16px',
                backgroundColor: lang === 'id' ? '#0088cc' : '#fff',
                color: lang === 'id' ? 'white' : '#555',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '13px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease'
              }}
            >
              🇮🇩 ID
            </button>
            <button
              onClick={() => setLang('en')}
              style={{
                padding: '8px 16px',
                backgroundColor: lang === 'en' ? '#0088cc' : '#fff',
                color: lang === 'en' ? 'white' : '#555',
                border: 'none',
                borderLeft: '1px solid #ddd',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '13px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease'
              }}
            >
              🇬🇧 EN
            </button>
          </div>
        </div>

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy lang={lang} />} />
          <Route path="/terms-conditions" element={<TermsCondition lang={lang} />} />
          <Route path="*" element={<Navigate to="/privacy-policy" replace />} />
        </Routes>
      </div>
    </Layout>
  )
}

export default App
