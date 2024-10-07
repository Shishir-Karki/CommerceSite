import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = ({ query, setQuery }) => {
  const items = useSelector(store => store.cart.items)
  return (
    <div>
      <header className="bg-yellow-400 p-4 flex justify-between items-center">
        <Link to='/home'>
        <h1 className="text-xl font-bold w-20">
          <img src='data:image/png;base64,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'
          alt='logo'
          ></img>
            
        </h1>
        </Link>
        <div>
          <input
            type="text"
            placeholder="Search for products"
            className="p-2 rounded-md border-2 border-black"
            value={query}
            onChange={(e) => setQuery(e.target.value)}  
          />
         
        </div>
        <div className="flex items-center space-x-4">
          <Link to='/'>
            <button className="p-2 bg-gray-200 rounded">Log Out</button>
          </Link>
        
        
          <Link to='/cart'>
            <button className="p-2 bg-gray-200 rounded">Cart[{items.length}]</button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
