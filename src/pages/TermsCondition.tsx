import DOMPurify from 'dompurify'

interface TermsConditionProps {
  lang: 'id' | 'en'
}

function TermsCondition({ lang }: TermsConditionProps) {
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

      {/* Important Notice */}
      <div style={{
        backgroundColor: '#f0f8ff',
        padding: '20px',
        borderRadius: '8px',
        borderLeft: '4px solid #0088cc',
        marginTop: '30px'
      }}>
        <p style={{
          color: '#0088cc',
          fontWeight: '600',
          marginBottom: '10px',
          fontSize: '16px'
        }}>
          {t.notice.title}
        </p>
        <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '0' }}>
          {t.notice.text}
        </p>
      </div>
    </div>
  )
}

// --- Indonesian ---
const id = {
  title: 'Syarat dan Ketentuan',
  lastUpdated: 'Terakhir diperbarui',
  notice: {
    title: 'Perhatian Penting',
    text: 'Dengan menggunakan aplikasi pelanggan Cobra Dental Indonesia, Anda menyatakan telah membaca, memahami, dan menyetujui seluruh Syarat dan Ketentuan serta Kebijakan Privasi yang berlaku. Aplikasi ini hanya diperuntukkan bagi pelanggan terdaftar PT Cobra Dental Indonesia.'
  },
  sections: [
    {
      heading: '1. Penerimaan Syarat dan Ketentuan',
      paragraphs: [
        'Dengan mengunduh, menginstal, mendaftar, atau menggunakan aplikasi Cobra Dental Indonesia ("Aplikasi"), Anda menyetujui untuk terikat oleh Syarat dan Ketentuan ini. Aplikasi ini merupakan platform layanan eksklusif yang hanya dapat digunakan oleh pelanggan terdaftar PT Cobra Dental Indonesia. Jika Anda tidak menyetujui syarat dan ketentuan ini, mohon untuk tidak menggunakan Aplikasi.'
      ]
    },
    {
      heading: '2. Definisi',
      items: [
        '<strong>"Aplikasi"</strong> merujuk pada aplikasi mobile Cobra Dental Indonesia yang berfungsi sebagai platform untuk pembelian produk dental',
        '<strong>"Kami"</strong> atau <strong>"Cobra Dental"</strong> merujuk pada PT Cobra Dental Indonesia beserta seluruh cabang dan afiliasinya',
        '<strong>"Pengguna"</strong> atau <strong>"Anda"</strong> merujuk pada pelanggan terdaftar yang menggunakan Aplikasi',
        '<strong>"Produk"</strong> merujuk pada seluruh barang dan peralatan dental yang tersedia di Aplikasi',
        '<strong>"Pesanan"</strong> merujuk pada transaksi pembelian produk yang dilakukan melalui Aplikasi'
      ]
    },
    {
      heading: '3. Kelayakan dan Pendaftaran Akun',
      paragraphs: ['Aplikasi ini hanya tersedia bagi pelanggan yang telah terdaftar secara resmi di PT Cobra Dental Indonesia. Untuk menggunakan Aplikasi, Anda harus:'],
      items: [
        'Memiliki nomor pelanggan (customer ID) Cobra Dental yang valid dan aktif',
        'Memberikan informasi identitas dan profesional yang akurat saat pendaftaran',
        'Menjaga kerahasiaan kredensial akun (username dan password) Anda',
        'Bertanggung jawab penuh atas seluruh aktivitas yang dilakukan melalui akun Anda',
        'Segera menghubungi kami apabila terjadi akses tidak sah terhadap akun Anda',
        'Memperbarui informasi akun jika terdapat perubahan data'
      ]
    },
    {
      heading: '4. Penggunaan Aplikasi',
      paragraphs: ['Melalui Aplikasi ini, Anda dapat:'],
      items: [
        'Menelusuri katalog produk dental yang tersedia di Cobra Dental Indonesia',
        'Melakukan pemesanan dan pembelian produk secara online',
        'Melihat riwayat pesanan dan status pengiriman',
        'Mengakses informasi promosi, diskon, dan penawaran khusus untuk pelanggan',
        'Mengelola profil akun dan preferensi notifikasi',
        'Menghubungi layanan pelanggan Cobra Dental melalui fitur yang tersedia'
      ]
    },
    {
      heading: '5. Pemesanan dan Pembayaran',
      paragraphs: ['Seluruh pesanan yang dilakukan melalui Aplikasi tunduk pada ketersediaan produk dan konfirmasi dari pihak Cobra Dental. Ketentuan pemesanan dan pembayaran meliputi:'],
      items: [
        'Harga produk dicantumkan dalam mata uang Rupiah (IDR) dan dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya',
        'Pembayaran dilakukan melalui metode yang tersedia di Aplikasi, termasuk transfer bank, virtual account, atau metode pembayaran lain yang disediakan',
        'Pesanan dianggap sah setelah pembayaran dikonfirmasi dan mendapat persetujuan dari sistem',
        'Kami berhak membatalkan pesanan apabila terjadi kesalahan harga, informasi produk, produk tidak tersedia, atau kecurigaan aktivitas penipuan',
        'Harga yang tertera belum termasuk ongkos kirim kecuali dinyatakan lain'
      ]
    },
    {
      heading: '6. Pengiriman',
      paragraphs: ['Pengiriman produk dilakukan ke alamat yang Anda daftarkan di Aplikasi. Ketentuan pengiriman meliputi:'],
      items: [
        'Estimasi waktu pengiriman bervariasi tergantung lokasi, ketersediaan stok, dan jasa pengiriman yang digunakan',
        'Cobra Dental tidak bertanggung jawab atas keterlambatan pengiriman yang disebabkan oleh pihak jasa pengiriman atau keadaan di luar kendali kami (force majeure)',
        'Anda wajib memeriksa kondisi produk saat diterima dan segera melaporkan apabila terdapat kerusakan atau ketidaksesuaian'
      ]
    },
    {
      heading: '7. Pengembalian dan Penukaran',
      paragraphs: ['Kebijakan pengembalian dan penukaran produk berlaku dengan ketentuan sebagai berikut:'],
      items: [
        'Permintaan pengembalian atau penukaran harus diajukan dalam waktu maksimal 3 hari kerja setelah produk diterima',
        'Produk harus dalam kondisi asli, belum digunakan, dan dalam kemasan aslinya',
        'Produk medis/dental tertentu yang bersifat habis pakai atau memiliki pembatasan khusus tidak dapat dikembalikan',
        'Pengembalian wajib disertai bukti pembelian dari Aplikasi',
        'Pengembalian dana akan diproses sesuai kebijakan yang berlaku setelah produk diterima kembali dan diverifikasi oleh tim kami'
      ]
    },
    {
      heading: '8. Hak Kekayaan Intelektual',
      paragraphs: ['Seluruh konten dalam Aplikasi termasuk namun tidak terbatas pada teks, gambar, logo, desain, ikon, foto produk, dan perangkat lunak adalah milik PT Cobra Dental Indonesia dan dilindungi oleh hukum hak kekayaan intelektual yang berlaku. Anda tidak diperkenankan untuk:'],
      items: [
        'Menyalin, memodifikasi, mendistribusikan, atau mempublikasikan konten Aplikasi tanpa izin tertulis',
        'Menggunakan merek dagang, logo, atau elemen visual Cobra Dental tanpa persetujuan',
        'Melakukan reverse engineering, dekompilasi, atau disassembly terhadap Aplikasi',
        'Menggunakan konten Aplikasi untuk tujuan komersial di luar platform ini'
      ]
    },
    {
      heading: '9. Larangan Penggunaan',
      paragraphs: ['Dalam menggunakan Aplikasi, Anda dilarang untuk:'],
      items: [
        'Menggunakan Aplikasi untuk tujuan ilegal atau yang melanggar hukum',
        'Membagikan akses akun Anda kepada pihak yang tidak berhak',
        'Mengirimkan virus, malware, atau kode berbahaya lainnya',
        'Mencoba mengakses sistem, data, atau akun pengguna lain tanpa otorisasi',
        'Menggunakan bot, scraper, atau metode otomatis untuk mengakses Aplikasi',
        'Memanipulasi harga, stok, atau informasi produk di dalam Aplikasi',
        'Melakukan tindakan yang dapat merusak reputasi Cobra Dental Indonesia'
      ]
    },
    {
      heading: '10. Batasan Tanggung Jawab',
      paragraphs: ['PT Cobra Dental Indonesia tidak bertanggung jawab atas:'],
      items: [
        'Kerugian tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan Aplikasi',
        'Gangguan layanan Aplikasi akibat pemeliharaan sistem, masalah jaringan, atau keadaan di luar kendali kami',
        'Ketidakakuratan informasi atau gambar produk yang ditampilkan di Aplikasi',
        'Tindakan atau kelalaian pihak ketiga termasuk penyedia jasa pembayaran dan pengiriman',
        'Kehilangan data atau kerusakan perangkat yang diakibatkan oleh faktor di luar kendali kami'
      ]
    },
    {
      heading: '11. Perubahan Layanan dan Syarat',
      paragraphs: [
        'Kami berhak untuk memodifikasi, memperbarui, menangguhkan, atau menghentikan layanan Aplikasi ataupun bagian darinya kapan saja. Kami juga berhak memperbarui Syarat dan Ketentuan ini sewaktu-waktu. Perubahan material akan diberitahukan melalui Aplikasi. Penggunaan Aplikasi secara berkelanjutan setelah perubahan dipublikasikan dianggap sebagai penerimaan Anda terhadap syarat dan ketentuan yang diperbarui.'
      ]
    },
    {
      heading: '12. Hukum yang Berlaku dan Penyelesaian Sengketa',
      paragraphs: [
        'Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap sengketa yang timbul dari atau terkait dengan penggunaan Aplikasi akan diselesaikan secara musyawarah terlebih dahulu. Apabila musyawarah tidak mencapai kesepakatan, sengketa akan diselesaikan melalui pengadilan yang berwenang di wilayah hukum Jakarta, Indonesia.'
      ]
    },
    {
      heading: '13. Hubungi Kami',
      paragraphs: ['Untuk pertanyaan, saran, atau keluhan mengenai Syarat dan Ketentuan ini, silakan hubungi kami:'],
      contact: true
    }
  ]
}

// --- English ---
const en = {
  title: 'Terms and Conditions',
  lastUpdated: 'Last updated',
  notice: {
    title: 'Important Notice',
    text: 'By using the Cobra Dental Indonesia customer app, you confirm that you have read, understood, and agreed to all applicable Terms and Conditions and Privacy Policy. This app is exclusively intended for registered customers of PT Cobra Dental Indonesia.'
  },
  sections: [
    {
      heading: '1. Acceptance of Terms and Conditions',
      paragraphs: [
        'By downloading, installing, registering, or using the Cobra Dental Indonesia application ("App"), you agree to be bound by these Terms and Conditions. This App is an exclusive customer platform that can only be used by registered customers of PT Cobra Dental Indonesia. If you do not agree to these terms and conditions, please do not use the App.'
      ]
    },
    {
      heading: '2. Definitions',
      items: [
        '<strong>"App"</strong> refers to the Cobra Dental Indonesia mobile application that serves as a platform for purchasing dental products',
        '<strong>"We"</strong> or <strong>"Cobra Dental"</strong> refers to PT Cobra Dental Indonesia along with all its branches and affiliates',
        '<strong>"User"</strong> or <strong>"You"</strong> refers to registered customers who use the App',
        '<strong>"Products"</strong> refers to all dental goods and equipment available on the App',
        '<strong>"Orders"</strong> refers to product purchase transactions made through the App'
      ]
    },
    {
      heading: '3. Eligibility and Account Registration',
      paragraphs: ['This App is only available to customers who are officially registered with PT Cobra Dental Indonesia. To use the App, you must:'],
      items: [
        'Have a valid and active Cobra Dental customer ID',
        'Provide accurate identity and professional information during registration',
        'Maintain the confidentiality of your account credentials (username and password)',
        'Be fully responsible for all activities conducted through your account',
        'Immediately contact us in the event of unauthorized access to your account',
        'Update your account information if there are any changes'
      ]
    },
    {
      heading: '4. Use of the App',
      paragraphs: ['Through this App, you can:'],
      items: [
        'Browse the dental product catalog available at Cobra Dental Indonesia',
        'Place orders and purchase products online',
        'View order history and delivery status',
        'Access promotions, discounts, and special offers for customers',
        'Manage your account profile and notification preferences',
        'Contact Cobra Dental customer service through available features'
      ]
    },
    {
      heading: '5. Orders and Payments',
      paragraphs: ['All orders placed through the App are subject to product availability and confirmation from Cobra Dental. Ordering and payment terms include:'],
      items: [
        'Product prices are listed in Indonesian Rupiah (IDR) and may change at any time without prior notice',
        'Payments are made through methods available in the App, including bank transfers, virtual accounts, or other provided payment methods',
        'Orders are considered valid after payment is confirmed and approved by the system',
        'We reserve the right to cancel orders in the event of pricing errors, product information errors, product unavailability, or suspected fraudulent activity',
        'Listed prices do not include shipping costs unless otherwise stated'
      ]
    },
    {
      heading: '6. Delivery',
      paragraphs: ['Product delivery is made to the address registered in your App. Delivery terms include:'],
      items: [
        'Estimated delivery times vary depending on location, stock availability, and the delivery service used',
        'Cobra Dental is not responsible for shipping delays caused by delivery service providers or circumstances beyond our control (force majeure)',
        'You are required to inspect the product condition upon receipt and promptly report any damage or discrepancies'
      ]
    },
    {
      heading: '7. Returns and Exchanges',
      paragraphs: ['The product return and exchange policy applies with the following conditions:'],
      items: [
        'Return or exchange requests must be submitted within a maximum of 3 business days after product receipt',
        'Products must be in original condition, unused, and in their original packaging',
        'Certain medical/dental products that are consumable or have special restrictions cannot be returned',
        'Returns must be accompanied by proof of purchase from the App',
        'Refunds will be processed according to applicable policies after the product is received back and verified by our team'
      ]
    },
    {
      heading: '8. Intellectual Property Rights',
      paragraphs: ['All content in the App, including but not limited to text, images, logos, designs, icons, product photos, and software, is the property of PT Cobra Dental Indonesia and is protected by applicable intellectual property laws. You are not permitted to:'],
      items: [
        'Copy, modify, distribute, or publish App content without written permission',
        'Use Cobra Dental trademarks, logos, or visual elements without consent',
        'Reverse engineer, decompile, or disassemble the App',
        'Use App content for commercial purposes outside this platform'
      ]
    },
    {
      heading: '9. Prohibited Use',
      paragraphs: ['When using the App, you are prohibited from:'],
      items: [
        'Using the App for illegal or unlawful purposes',
        'Sharing your account access with unauthorized parties',
        'Transmitting viruses, malware, or other malicious code',
        'Attempting to access other users\' systems, data, or accounts without authorization',
        'Using bots, scrapers, or automated methods to access the App',
        'Manipulating prices, stock, or product information within the App',
        'Taking actions that could damage the reputation of Cobra Dental Indonesia'
      ]
    },
    {
      heading: '10. Limitation of Liability',
      paragraphs: ['PT Cobra Dental Indonesia is not liable for:'],
      items: [
        'Indirect, incidental, or consequential damages arising from use of the App',
        'App service disruptions due to system maintenance, network issues, or circumstances beyond our control',
        'Inaccuracy of product information or images displayed in the App',
        'Actions or negligence of third parties including payment and delivery service providers',
        'Data loss or device damage caused by factors beyond our control'
      ]
    },
    {
      heading: '11. Changes to Services and Terms',
      paragraphs: [
        'We reserve the right to modify, update, suspend, or discontinue the App services or any part thereof at any time. We also reserve the right to update these Terms and Conditions at any time. Material changes will be notified through the App. Continued use of the App after changes are published constitutes your acceptance of the updated terms and conditions.'
      ]
    },
    {
      heading: '12. Governing Law and Dispute Resolution',
      paragraphs: [
        'These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of Indonesia. Any disputes arising from or related to the use of the App shall first be resolved through deliberation. If deliberation does not reach an agreement, disputes shall be settled through the competent court in the jurisdiction of Jakarta, Indonesia.'
      ]
    },
    {
      heading: '13. Contact Us',
      paragraphs: ['For questions, suggestions, or complaints regarding these Terms and Conditions, please contact us:'],
      contact: true
    }
  ]
}

export default TermsCondition
