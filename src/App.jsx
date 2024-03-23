import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";
import Hero from "./Components/UI/Hero";
import Services from "./Components/UI/Services";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </>
  );
}

export default App;
