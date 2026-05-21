import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Experience />
      <Certificates />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
