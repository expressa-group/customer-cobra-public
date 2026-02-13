import DOMPurify from 'dompurify'

interface PrivacyPolicyProps {
  lang: 'id' | 'en'
}

function PrivacyPolicy({ lang }: PrivacyPolicyProps) {
  const t = lang === 'id' ? id : en

  return (
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '20px'
    }}>
      <h1 style={{
        color: '#0088cc',
        fontSize: '32px',
        marginBottom: '10px',
        fontWeight: '700'
      }}>
        {t.title}
      </h1>
      <p style={{
        color: '#666',
        fontSize: '14px',
        marginBottom: '30px'
      }}>
        {t.lastUpdated}: {new Date().toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>

      {t.sections.map((section, idx) => (
        <section key={idx} style={{ marginBottom: idx === t.sections.length - 1 ? '40px' : '30px' }}>
          <h2 style={{
            color: '#333',
            fontSize: '20px',
            marginBottom: '15px',
            fontWeight: '600'
          }}>
            {section.heading}
          </h2>
          {section.paragraphs?.map((p, pi) => (
            <p key={pi} style={{ color: '#555', lineHeight: '1.8', marginBottom: '15px' }}>{p}</p>
          ))}
          {section.items && (
            <ul style={{
              color: '#555',
              lineHeight: '1.8',
              marginLeft: '20px',
              marginBottom: '15px'
            }}>
              {section.items.map((item, ii) => (
                <li key={ii} style={{ marginBottom: '8px' }} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item) }} />
              ))}
            </ul>
          )}
          {section.contact && (
            <div style={{
              color: '#555',
              lineHeight: '1.8',
              backgroundColor: '#f5f5f5',
              padding: '20px',
              borderRadius: '8px',
              borderLeft: '4px solid #0088cc'
            }}>
              <p style={{ marginBottom: '8px' }}><strong>PT Cobra Dental Indonesia</strong></p>
              <p style={{ marginBottom: '8px' }}><strong>Email:</strong> support@cobradental.co.id</p>
              <p style={{ marginBottom: '8px' }}><strong>{lang === 'id' ? 'Telepon' : 'Phone'}:</strong> (021) 4682-0808</p>
              <p style={{ marginBottom: '8px' }}><strong>WhatsApp:</strong> +62 811-8080-880</p>
              <p style={{ marginBottom: '0' }}><strong>{lang === 'id' ? 'Alamat' : 'Address'}:</strong> Jl. Mampang Prapatan Raya No. 73, Jakarta Selatan 12790, Indonesia</p>
            </div>
          )}
        </section>
      ))}
    </div>
  )
}

// --- Indonesian ---
const id = {
  title: 'Kebijakan Privasi',
  lastUpdated: 'Terakhir diperbarui',
  sections: [
    {
      heading: '1. Pendahuluan',
      paragraphs: [
        'Selamat datang di aplikasi Cobra Dental Indonesia ("Aplikasi"). Aplikasi ini merupakan platform layanan pelanggan yang diperuntukkan secara eksklusif bagi pelanggan terdaftar PT Cobra Dental Indonesia untuk melakukan pembelian produk dental secara online. Kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi Anda selama menggunakan Aplikasi.'
      ]
    },
    {
      heading: '2. Informasi yang Kami Kumpulkan',
      paragraphs: ['Dalam mengoperasikan Aplikasi ini, kami dapat mengumpulkan informasi sebagai berikut:'],
      items: [
        '<strong>Informasi Akun Pelanggan:</strong> Nama lengkap, alamat email, nomor telepon, nomor pelanggan Cobra Dental, alamat praktik/klinik, dan alamat pengiriman',
        '<strong>Informasi Profesional:</strong> Nama klinik/praktik, nomor STR/SIP, spesialisasi kedokteran gigi, dan informasi lisensi lainnya yang diperlukan untuk verifikasi pelanggan',
        '<strong>Informasi Transaksi:</strong> Riwayat pemesanan, detail produk yang dibeli, metode pembayaran, status pesanan, dan riwayat pembayaran',
        '<strong>Informasi Perangkat:</strong> Model perangkat, sistem operasi, versi aplikasi, ID unik perangkat, dan data diagnostik',
        '<strong>Informasi Aktivitas:</strong> Log aktivitas dalam aplikasi, produk yang dilihat, pencarian produk, preferensi kategori, dan interaksi dengan fitur aplikasi',
        '<strong>Informasi Lokasi:</strong> Lokasi geografis perangkat (jika Anda memberikan izin) untuk menentukan cabang Cobra Dental terdekat dan estimasi pengiriman'
      ]
    },
    {
      heading: '3. Penggunaan Informasi',
      paragraphs: ['Informasi yang dikumpulkan digunakan untuk keperluan berikut:'],
      items: [
        'Memverifikasi status Anda sebagai pelanggan terdaftar Cobra Dental Indonesia',
        'Memproses, mengonfirmasi, dan mengirimkan pesanan produk melalui Aplikasi',
        'Menampilkan katalog produk, harga, dan ketersediaan stok yang relevan',
        'Memberikan rekomendasi produk berdasarkan preferensi dan riwayat pembelian Anda',
        'Mengirimkan notifikasi terkait status pesanan, promosi, dan penawaran khusus',
        'Menyediakan layanan pelanggan dan dukungan teknis melalui aplikasi',
        'Meningkatkan performa, fungsionalitas, dan pengalaman pengguna aplikasi',
        'Melakukan analisis internal untuk pengembangan layanan dan produk',
        'Mematuhi kewajiban hukum dan peraturan perundang-undangan yang berlaku'
      ]
    },
    {
      heading: '4. Perlindungan Data',
      paragraphs: [
        'Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang memadai untuk melindungi data pribadi Anda dari akses, penggunaan, pengubahan, atau pengungkapan yang tidak sah. Seluruh data ditransmisikan melalui koneksi terenkripsi (SSL/TLS) dan disimpan dalam server yang dilindungi dengan standar keamanan industri. Akses terhadap data pribadi dibatasi hanya kepada karyawan dan pihak yang berwenang.'
      ]
    },
    {
      heading: '5. Berbagi Informasi',
      paragraphs: ['Kami tidak akan menjual, menyewakan, atau memperdagangkan informasi pribadi Anda kepada pihak ketiga. Informasi Anda hanya dapat dibagikan kepada:'],
      items: [
        'Mitra logistik dan jasa pengiriman untuk memproses pengiriman pesanan Anda',
        'Penyedia layanan pembayaran (payment gateway) untuk memproses transaksi',
        'Cabang-cabang Cobra Dental Indonesia yang terlibat dalam pemenuhan pesanan',
        'Otoritas hukum atau regulator apabila diwajibkan oleh peraturan perundang-undangan',
        'Penyedia layanan teknologi yang mendukung operasional aplikasi, dengan perjanjian kerahasiaan'
      ]
    },
    {
      heading: '6. Hak Pengguna',
      paragraphs: ['Sebagai pengguna aplikasi, Anda memiliki hak untuk:'],
      items: [
        'Mengakses dan melihat data pribadi yang kami simpan tentang Anda',
        'Memperbarui atau memperbaiki informasi akun Anda melalui pengaturan profil',
        'Meminta penghapusan akun dan data pribadi Anda dari sistem kami',
        'Menolak menerima komunikasi pemasaran dan notifikasi promosi',
        'Menarik persetujuan atas pemrosesan data tertentu kapan saja',
        'Mengajukan pertanyaan atau keluhan terkait pengelolaan data pribadi Anda'
      ]
    },
    {
      heading: '7. Notifikasi dan Komunikasi',
      paragraphs: [
        'Aplikasi dapat mengirimkan notifikasi push, email, atau SMS terkait status pesanan, informasi produk baru, promosi, dan pembaruan layanan. Anda dapat mengelola preferensi notifikasi melalui pengaturan di dalam Aplikasi atau pengaturan perangkat Anda.'
      ]
    },
    {
      heading: '8. Penyimpanan Data',
      paragraphs: [
        'Data pribadi Anda disimpan selama akun Anda aktif atau selama diperlukan untuk menyediakan layanan kami. Jika Anda memutuskan untuk menghapus akun, data pribadi Anda akan dihapus dari sistem kami dalam jangka waktu yang wajar, kecuali jika kami diwajibkan oleh hukum untuk menyimpan data tertentu (misalnya catatan transaksi untuk keperluan pajak dan akuntansi).'
      ]
    },
    {
      heading: '9. Perubahan Kebijakan Privasi',
      paragraphs: [
        'Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan pada layanan atau peraturan yang berlaku. Setiap perubahan material akan diberitahukan melalui notifikasi di Aplikasi atau melalui email. Penggunaan Aplikasi yang berkelanjutan setelah perubahan dipublikasikan dianggap sebagai penerimaan Anda terhadap kebijakan yang diperbarui.'
      ]
    },
    {
      heading: '10. Hubungi Kami',
      paragraphs: ['Jika Anda memiliki pertanyaan, permintaan, atau keluhan terkait Kebijakan Privasi ini atau pengelolaan data pribadi Anda, silakan hubungi kami:'],
      contact: true
    }
  ]
}

// --- English ---
const en = {
  title: 'Privacy Policy',
  lastUpdated: 'Last updated',
  sections: [
    {
      heading: '1. Introduction',
      paragraphs: [
        'Welcome to the Cobra Dental Indonesia application ("App"). This App is an exclusive customer platform designated for registered customers of PT Cobra Dental Indonesia to purchase dental products online. We are committed to protecting the privacy and security of your personal data. This Privacy Policy explains how we collect, use, store, and protect your information while using the App.'
      ]
    },
    {
      heading: '2. Information We Collect',
      paragraphs: ['In operating this App, we may collect the following information:'],
      items: [
        '<strong>Customer Account Information:</strong> Full name, email address, phone number, Cobra Dental customer number, practice/clinic address, and shipping address',
        '<strong>Professional Information:</strong> Clinic/practice name, professional license numbers (STR/SIP), dental specialization, and other licensing information required for customer verification',
        '<strong>Transaction Information:</strong> Order history, purchased product details, payment methods, order status, and payment history',
        '<strong>Device Information:</strong> Device model, operating system, app version, unique device ID, and diagnostic data',
        '<strong>Activity Information:</strong> In-app activity logs, viewed products, product searches, category preferences, and interactions with app features',
        '<strong>Location Information:</strong> Geographic location of your device (if you grant permission) to determine the nearest Cobra Dental branch and delivery estimates'
      ]
    },
    {
      heading: '3. Use of Information',
      paragraphs: ['The collected information is used for the following purposes:'],
      items: [
        'Verifying your status as a registered customer of Cobra Dental Indonesia',
        'Processing, confirming, and delivering product orders through the App',
        'Displaying relevant product catalogs, prices, and stock availability',
        'Providing product recommendations based on your preferences and purchase history',
        'Sending notifications regarding order status, promotions, and special offers',
        'Providing customer service and technical support through the app',
        'Improving app performance, functionality, and user experience',
        'Conducting internal analysis for service and product development',
        'Complying with legal obligations and applicable regulations'
      ]
    },
    {
      heading: '4. Data Protection',
      paragraphs: [
        'We implement adequate technical and organizational security measures to protect your personal data from unauthorized access, use, modification, or disclosure. All data is transmitted through encrypted connections (SSL/TLS) and stored on servers protected by industry-standard security. Access to personal data is limited to authorized employees and parties only.'
      ]
    },
    {
      heading: '5. Information Sharing',
      paragraphs: ['We will not sell, rent, or trade your personal information to third parties. Your information may only be shared with:'],
      items: [
        'Logistics partners and delivery services to process your order shipments',
        'Payment service providers (payment gateways) to process transactions',
        'Cobra Dental Indonesia branches involved in order fulfillment',
        'Legal authorities or regulators when required by applicable laws and regulations',
        'Technology service providers that support app operations, under confidentiality agreements'
      ]
    },
    {
      heading: '6. User Rights',
      paragraphs: ['As an app user, you have the right to:'],
      items: [
        'Access and view the personal data we store about you',
        'Update or correct your account information through profile settings',
        'Request deletion of your account and personal data from our systems',
        'Opt out of marketing communications and promotional notifications',
        'Withdraw consent for certain data processing at any time',
        'Submit inquiries or complaints regarding the management of your personal data'
      ]
    },
    {
      heading: '7. Notifications and Communications',
      paragraphs: [
        'The App may send push notifications, emails, or SMS regarding order status, new product information, promotions, and service updates. You can manage your notification preferences through the App settings or your device settings.'
      ]
    },
    {
      heading: '8. Data Retention',
      paragraphs: [
        'Your personal data is retained for as long as your account is active or as needed to provide our services. If you choose to delete your account, your personal data will be removed from our systems within a reasonable timeframe, unless we are required by law to retain certain data (e.g., transaction records for tax and accounting purposes).'
      ]
    },
    {
      heading: '9. Changes to Privacy Policy',
      paragraphs: [
        'We may update this Privacy Policy from time to time to reflect changes in our services or applicable regulations. Any material changes will be notified through in-app notifications or email. Continued use of the App after changes are published constitutes your acceptance of the updated policy.'
      ]
    },
    {
      heading: '10. Contact Us',
      paragraphs: ['If you have any questions, requests, or complaints regarding this Privacy Policy or the management of your personal data, please contact us:'],
      contact: true
    }
  ]
}

export default PrivacyPolicy
