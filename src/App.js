import './css/style.css';
import  './css/normalize.css'

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import BestReasons from './components/BestReasons';
import Galery from './components/Galery';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero/>
        <About/>
        <BestReasons/>
        <Galery/>
      </main>
    </div>
  );
}

export default App;
