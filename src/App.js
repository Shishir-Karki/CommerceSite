
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';

function App() {
  const [query, setQuery] = useState("")



  return (
    <div className="App">
      <Navbar query={query} setQuery={setQuery}/>
      <Routes>
        <Route path="/" element={<ProductList query={query}/>}/>
        <Route path='/cart' element={<Cart/>}/>
       
      </Routes>
    </div>
  );
}

export default App;
