import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Categories from "./components/Categories";
import Providers from "./components/Providers";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Categories />
        <Providers />
        <Pricing />
        <footer className="border-t border-purple-100 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Altopupin.com. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="text-gray-600 hover:text-purple-700">Kebijakan Privasi</a>
              <a href="#" className="text-gray-600 hover:text-purple-700">Syarat & Ketentuan</a>
              <a href="#" className="text-gray-600 hover:text-purple-700">Kontak</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
