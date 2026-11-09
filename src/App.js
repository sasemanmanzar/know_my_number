
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Screenshots from "./components/Screenshots";
import Privacy from "./components/Privacy";
import Download from "./components/Download";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <Privacy />
        <Download />
      </main>
      <Footer />
    </>
  );
}

export default App;
