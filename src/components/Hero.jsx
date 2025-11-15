import { ArrowRight, Shield, Zap, Layers } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-purple-300/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
            <Zap size={16} /> Cepat • Murah • Otomatis
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Top Up & SMM Terlengkap dalam Satu Platform
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Altopupin memudahkan pembelian pulsa, paket data, token PLN, e-wallet, dan layanan Social Media Marketing dengan harga bersaing dan proses otomatis.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#catalog" className="px-5 py-3 rounded-xl text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow hover:shadow-md inline-flex items-center gap-2">
              Jelajahi Katalog <ArrowRight size={18} />
            </a>
            <a href="#" className="px-5 py-3 rounded-xl text-purple-700 bg-purple-100 hover:bg-purple-200">Cara Kerja</a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-purple-50 text-purple-600 grid place-content-center"><Shield size={20} /></div>
              <p className="text-sm text-gray-700">Pembayaran aman & terpercaya</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-purple-50 text-purple-600 grid place-content-center"><Layers size={20} /></div>
              <p className="text-sm text-gray-700">Integrasi multi-provider</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-2xl p-1">
            <div className="h-full w-full rounded-[14px] bg-white grid place-content-center text-center p-8">
              <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white grid place-content-center shadow-lg">💎</div>
              <p className="mt-4 text-xl font-semibold text-gray-900">Altopupin Dashboard</p>
              <p className="text-gray-600">Kelola pesanan SMM & PPOB dengan mudah</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
