import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CatalogPg from "./pages/CatalogPg";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Manifacture from "./pages/Manifacture";
import Register from "./pages/Register";
import Services from "./pages/Services";
import Customers from "./pages/Client";
import Connection  from "./pages/Connection";
import Totally from "./pages/Totally";
import Dostavka from "./pages/Deliver";
import Oplata from "./pages/Pay";
import Garantii from "./pages/Garantii";
import Labaratory from "./pages/Labaratory";
import OvoshiPg from "./pages/OvoshiPg";
import Blog from "./pages/Blog";
import Detail from "./pages/Detail";
import Korzinka from "./pages/Korzinka";
import Liked from "./pages/Liked";
import SalePage from "./pages/Sale";
import Inform from "./pages/Inform";
import BrendPage from "./pages/BrendPage";
import Collate from "./pages/Collate";
import Otziv from "./pages/Otziv"
import CertificatePg from "./pages/CertificatePg";
import Faqs from "./pages/Faqs";
import Account from "./pages/Account";
import Aplication from "./pages/Aplication";

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="lg:pt-[160px] sm:pt-[160px] pt-[90px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/katalog" element={<CatalogPg />} />
            <Route path="/katalog/laboratornoe" element={<Labaratory />} />
            <Route path="/katalog/laboratornoe/:id" element={<OvoshiPg />} />
            <Route path="/proizvoditel" element={<Manifacture />} />
            <Route path="/proizvoditel/:id" element={<BrendPage />} />
            <Route path="/kabinet-podklyuch" element={<Register />} />
            <Route path="/kabinet-podklyuch/:id" element={<Inform />} />
            <Route path="/uslugi" element={<Services />} />
            <Route path="/aktsiya" element={<SalePage />} />
            <Route path="/pokupatel" element={<Customers />} />
            <Route path="/kontakt" element={<Connection />} />
            <Route path="/o-kompanii" element={<Totally />} />
            <Route
              path="/o-kompanii/certificate"
              element={<CertificatePg />}
            />
            <Route path="/dostavka" element={<Dostavka />} />
            <Route path="/oplata" element={<Oplata />} />
            <Route path="/garantii" element={<Garantii />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/korzinka" element={<Korzinka />} />
            <Route path="/izbrannoe" element={<Liked />} />
            <Route path="/sravniti" element={<Collate />} />
            <Route path="/otziv" element={<Otziv />} />
            <Route path="/faq" element={<Faqs />} />
            <Route path="/otziv" element={<Otziv />} />
            <Route path="/profil" element={<Account />} />
            <Route path="/vakansi" element={<Aplication />} />
            <Route
              path="/blog/informatsioniy-statya"
              element={<Detail />}
            />
            <Route path="/blog/informatsioniy-statya/:id" element={<Detail />} />

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
