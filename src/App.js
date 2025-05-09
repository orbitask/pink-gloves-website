import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TelegramButton from './components/TelegramButton';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      <TelegramButton />
      <WhatsAppButton />
    </div>
  );
}

export default App;
