const tiers = [
  { name: "Starter", price: "Gratis", features: ["Katalog produk", "Checkout mock", "Tema ungu"], cta: "Mulai Sekarang" },
  { name: "Pro", price: "Rp 99rb/bln", features: ["Markup dinamis", "Integrasi 3 provider", "Notifikasi transaksi"], cta: "Coba 7 Hari" },
  { name: "Enterprise", price: "Hubungi Kami", features: ["SLA & prioritas", "Multi-admin & staff", "Webhook & audit log"], cta: "Konsultasi" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Paket Harga</h2>
        <p className="mt-2 text-center text-gray-600">Mulai dengan versi awal dan upgrade kapan saja.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <div key={i} className={`rounded-2xl border ${i===1? 'border-purple-300 shadow-lg' : 'border-purple-100'} bg-white p-6`}>
              <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
              <p className="mt-1 text-2xl font-bold text-purple-700">{t.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {t.features.map((f, j) => (<li key={j}>• {f}</li>))}
              </ul>
              <a href="#" className={`mt-6 inline-block w-full text-center px-4 py-2 rounded-lg ${i===1 ? 'text-white bg-gradient-to-r from-purple-600 to-indigo-600' : 'text-purple-700 bg-purple-100 hover:bg-purple-200'}`}>{t.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
