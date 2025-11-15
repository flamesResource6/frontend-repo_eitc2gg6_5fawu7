import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 grid place-content-center text-white">
              <Sparkles size={18} />
            </div>
            <span className="font-bold text-lg text-gray-900">Altopupin</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition">Fitur</a>
            <a href="#categories" className="text-gray-700 hover:text-purple-600 transition">Kategori</a>
            <a href="#providers" className="text-gray-700 hover:text-purple-600 transition">Provider</a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition">Harga</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="px-4 py-2 text-sm font-medium text-purple-700 hover:text-purple-800">Masuk</a>
            <a href="#" className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow hover:shadow-md hover:from-purple-700 hover:to-indigo-700 transition">Daftar</a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-purple-50 text-gray-700">
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#features" className="block px-2 py-2 rounded-lg hover:bg-purple-50">Fitur</a>
            <a href="#categories" className="block px-2 py-2 rounded-lg hover:bg-purple-50">Kategori</a>
            <a href="#providers" className="block px-2 py-2 rounded-lg hover:bg-purple-50">Provider</a>
            <a href="#pricing" className="block px-2 py-2 rounded-lg hover:bg-purple-50">Harga</a>
            <div className="pt-2 flex gap-2">
              <a href="#" className="flex-1 px-4 py-2 text-center text-sm font-medium text-purple-700 hover:text-purple-800">Masuk</a>
              <a href="#" className="flex-1 px-4 py-2 text-center text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow">Daftar</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
