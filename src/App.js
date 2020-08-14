import React from 'react';
import Navbar from './components/Navbar/navbar';
import ShopList from './components/Shoplist';
import "./style.css"

function App() {
  return (
    <div className="container">
      <Navbar />
      <ShopList />
    </div>
  );
}

export default App;
