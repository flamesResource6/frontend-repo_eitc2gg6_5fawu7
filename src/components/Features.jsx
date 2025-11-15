import { BadgeCheck, Clock, Coins, Database, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  { icon: <Clock />, title: "Proses Otomatis", desc: "Pesanan diproses cepat dan real-time." },
  { icon: <Coins />, title: "Harga Kompetitif", desc: "Markup fleksibel sesuai strategi Anda." },
  { icon: <Database />, title: "Stok Terjamin", desc: "Terhubung ke banyak provider sekaligus." },
  { icon: <ShieldCheck />, title: "Aman & Terpercaya", desc: "Transaksi terenkripsi dan transparan." },
  { icon: <BadgeCheck />, title: "Laporan Lengkap", desc: "Histori order & status selalu up to date." },
  { icon: <Sparkles />, title: "UI Modern", desc: "Tema ungu elegan, responsif di semua device." },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Kenapa Altopupin?</h2>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">Platform all-in-one untuk kebutuhan SMM dan PPOB harian Anda.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-purple-100 bg-white p-6 hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-purple-50 text-purple-600 grid place-content-center">{f.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-1 text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
