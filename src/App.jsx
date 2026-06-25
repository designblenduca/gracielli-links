import Hero from "./components/Hero";
import Social from "./components/Social";
import Banners from "./components/Banners";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Hero />
      <Social />
      <Banners />
      <Footer />
    </div>
  );
}
