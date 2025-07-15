
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import AiTools from './components/AiTools';
import Learn from './components/Learn';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <AiTools />
        <Learn />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
