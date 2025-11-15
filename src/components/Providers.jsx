const providers = [
  { name: "Medanpedia", type: "SMM Provider", desc: "Layanan SMM cepat & variatif" },
  { name: "Digiflazz", type: "PPOB Provider", desc: "Pulsa, data, PLN, e-wallet" },
  { name: "VipReseller", type: "PPOB Provider", desc: "Produk lengkap & harga bersaing" },
];

export default function Providers() {
  return (
    <section id="providers" className="py-16 md:py-24 bg-gradient-to-b from-purple-50/60 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Provider Terintegrasi</h2>
        <p className="mt-2 text-center text-gray-600">Multi-provider untuk reliabilitas & ketersediaan terbaik.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {providers.map((p, i) => (
            <div key={i} className="rounded-2xl border border-purple-100 bg-white p-6 text-center hover:shadow-md transition">
              <div className="mx-auto h-14 w-14 rounded-xl bg-purple-50" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{p.name}</h3>
              <p className="text-purple-600 text-sm font-medium">{p.type}</p>
              <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
