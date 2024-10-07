import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Cart from './Cart';
import ProductList from './ProductList';

const Body = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      {/* Navbar is placed at the top of all pages within Body */}
      <Navbar query={query} setQuery={setQuery} />

      <Routes>
        <Route path="/home" element={<ProductList query={query} />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default Body;
