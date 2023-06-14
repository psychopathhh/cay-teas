import './css/style.css';
import  './css/normalize.css'

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import BestReasons from './components/BestReasons';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import Services from './components/Services';
import CafeGourmand from './components/CafeGourmand';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero/>
        <About/>
        <Gallery/>
        <BestReasons/>
        <Menu/>
        <Services/>
        <CafeGourmand />
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
