import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Success from './pages/Success';
import News from './pages/News';
import Contact from './pages/Contact';
import AdminInbox from './pages/AdminInbox';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-ragda-primary">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/success" element={<Success />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin-inbox" element={<AdminInbox />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}
