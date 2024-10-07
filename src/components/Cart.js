import { useSelector, useDispatch } from 'react-redux';
import { removeItems } from '../utils.js/cartSlice'; // Adjust the path as necessary

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveItem = (id) => {
    dispatch(removeItems(id)); // Ensure you're passing the correct 'id'
  };

  return (
    <div className="cart container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Your Cart</h2>
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col border rounded-lg shadow-md p-4">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover rounded mb-2" 
              />
              <strong className="text-lg">{item.title}</strong>
              <p className="text-gray-600">Price: ${item.price}</p>
              <button 
                className="mt-2 bg-red-500 text-white py-1 rounded hover:bg-red-600"
                onClick={() => handleRemoveItem(item.id)} // Correctly passing item's id
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
