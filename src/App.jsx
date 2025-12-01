import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        {/* Additional sections can be added here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
