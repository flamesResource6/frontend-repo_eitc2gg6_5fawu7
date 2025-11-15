const categories = [
  { name: "Pulsa & Paket Data", desc: "Semua operator Indonesia", color: "from-purple-500 to-indigo-500" },
  { name: "E-Wallet", desc: "Dana, OVO, GoPay, ShopeePay", color: "from-fuchsia-500 to-purple-500" },
  { name: "Token PLN", desc: "Nominal lengkap", color: "from-violet-500 to-purple-500" },
  { name: "Voucher Game", desc: "ML, FF, Genshin, dll", color: "from-indigo-500 to-blue-500" },
  { name: "SMM Services", desc: "Followers, likes, views", color: "from-purple-600 to-violet-600" },
  { name: "Streaming & Premium", desc: "Netflix, Spotify, dll", color: "from-indigo-600 to-purple-600" },
];

export default function Categories() {
  return (
    <section id="categories" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Kategori Populer</h2>
            <p className="mt-2 text-gray-600">Mulai dari pulsa hingga layanan SMM terlengkap.</p>
          </div>
          <a href="#catalog" className="hidden md:inline-flex px-4 py-2 rounded-lg text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow hover:shadow-md">Lihat Semua</a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c, i) => (
            <div key={i} className="rounded-2xl p-6 bg-white border border-purple-100 hover:shadow-md transition">
              <div className={`h-28 rounded-xl bg-gradient-to-br ${c.color} p-1`}>
                <div className="w-full h-full rounded-[10px] bg-white/10" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{c.name}</h3>
              <p className="text-sm text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
