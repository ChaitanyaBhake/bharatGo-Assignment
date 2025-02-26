import { useDispatch, useSelector } from 'react-redux';
import cross from '../../assets/cross.svg';
import minus from '../../assets/minus.svg';
import plus from '../../assets/plus.svg';
import { checkout, removeFromCart, toggleCart, updateQuantity } from '../../store/slices/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div
      className={`fixed md:top-17.5 top-19 right-0 md:w-[380px] w-[300px] md:h-[94.5vh] h-[90vh] bg-white shadow-lg transition-transform transform z-10 flex flex-col justify-between overflow-auto border rounded-md ${
        cart.isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Header */}
      <div className="w-full ">
        <div className="flex items-center justify-between mb-4  border-b-1 border-gray-200 p-6">
          <h2 className="font-medium text-xl">My Order</h2>
          <img
            src={cross}
            className="cursor-pointer w-6 h-6"
            onClick={() => dispatch(toggleCart())}
          />
        </div>

        <div className="w-full">
          {/* Cart Items */}
          {cart.cartItems.length > 0 ? (
            <div className="w-full space-y-2 ">
              {cart.cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between w-full border-b-1 border-gray-200 pl-4 pr-4 pb-3  gap-2"
                >
                  {/* Image */}
                  <div className="w-20 h-20">
                    <img
                      src={item.images}
                      alt={item.title}
                      className="w-full h-full rounded-lg object-cover"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 px-3">
                    <p className="text-sm font-light  ">{item.title}</p>
                    <p className="text-gray-600">${item.price * item.quantity}</p>

                    <div className="flex items-center gap-2 mt-2">
                      <img
                        src={minus}
                        alt="decrease"
                        className="h-6 w-6 bg-red-200 rounded-md cursor-pointer"
                        onClick={() => dispatch(updateQuantity({ id: item.id, type: 'decrease' }))}
                      />

                      <div className="bg-gray-300 w-8 flex justify-center rounded-md">
                        {item.quantity}
                      </div>

                      <img
                        src={plus}
                        alt="increase"
                        className="h-6 w-6 bg-green-200 rounded-md cursor-pointer"
                        onClick={() => dispatch(updateQuantity({ id: item.id, type: 'increase' }))}
                      />
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    className="text-red-500 text-sm "
                    onClick={() => dispatch(removeFromCart(item))}
                  >
                    <img src={cross} alt="" className="w-6 h-6" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-5">Cart is empty</p>
          )}
        </div>
      </div>

      {/* Cart Total Section */}
      <div className="flex flex-col border-t border-gray-300 px-4 py-3">
        <div className="flex justify-between text-lg font-medium">
          <h3>Total</h3>
          <p>${cart.totalAmount}</p>
        </div>

        <button
          className="bg-black text-white px-4 py-2 mt-3 rounded-lg w-full"
          onClick={() => dispatch(checkout())}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
