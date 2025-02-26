import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  CART_ICON,
  EMAIL,
  EMAIL_ICON,
  MOBILE_PROFILE_ICON,
  MY_ORDER_ICON,
  NAV_ITEMS,
  PROFILE_ICON,
} from '../../constants/data';
import { toggleCart } from '../../store/slices/cartSlice';

const Navbar = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.cartCount);

  return (
    <nav className=" bg-white border-b-2 border-[#e5e7eb] flex justify-between items-center fixed top-0 z-10 w-full py-5 px-6 text-sm font-light">
      <div className="flex gap-4 items-center">
        {/* Company Logo */}
        <div className="font-semibold text-lg hidden md:block">{NAV_ITEMS[0].label}</div>

        {/* Navigation Links */}
        <div className="flex gap-4">
          {NAV_ITEMS.slice(1, -2).map((navTitle, i) => (
            <NavLink
              key={i}
              to={navTitle.route}
              className={({ isActive }) => `${isActive ? 'border-b-1 border-black' : ''}`}
            >
              {navTitle.label}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="flex gap-4 items-center">
        {/* Logged in user's Email */}
        <div className="text-black/60 hidden md:block">{EMAIL}</div>

        {/* My Orders & My Account */}
        <div className="gap-4 hidden md:flex">
          {NAV_ITEMS.slice(-2).map((navTitle, i) => (
            <NavLink
              key={i}
              to={navTitle.route}
              className={({ isActive }) => `${isActive ? 'border-b-1 border-black' : ''}`}
            >
              {navTitle.label}
            </NavLink>
          ))}
        </div>

        {/* Cart Icon (Desktop) */}
        <div className="h-6 w-6 cursor-pointer gap-1 mr-2 ml-2 hidden md:flex">
          <img src={CART_ICON} alt="" onClick={() => dispatch(toggleCart())} />
          <span>{cartCount}</span>
        </div>

        {/* Profile Icon (Mobile) */}
        <div className="h-6 w-6 cursor-pointer flex gap-1 mr-2 ml-2 md:hidden">
          <img src={PROFILE_ICON} alt="" onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} />
        </div>
      </div>

      {/* Mobile Profile Menu */}
      {isProfileMenuOpen && (
        <div className="absolute top-16 right-4 bg-white border rounded-lg p-4 flex flex-col w-60 shadow-lg lg:hidden">

          {/* Email  */}
          <div className="flex items-center gap-2  pb-2">
            <img src={EMAIL_ICON} alt="" className="w-6 h-6" />
            <span className="text-black/60">{EMAIL}</span>
          </div>

          {/* My order and My Account */}
          <div className="flex flex-col mt-2 gap-3 w-fit">
            <div className="flex gap-2">
              <img src={MY_ORDER_ICON} alt="" className="w-6 h-6" />
              <NavLink
                to="/myOrders"
                className={({ isActive }) => `${isActive ? 'border-b-1 border-black' : ''}`}
              >
                My Orders
              </NavLink>
            </div>

            <div className='flex gap-2 '>
              <img src={MOBILE_PROFILE_ICON} alt="" className='w-6 h-6' />
              <NavLink
                to="/myAccount"
                className={({ isActive }) => `${isActive ? 'border-b-1 border-black' : ''}`}
              >
                My Account
              </NavLink>
            </div>
          </div>

          {/* Cart */}
          <div
            className="flex items-center gap-2 mt-2 cursor-pointer"
            onClick={() => dispatch(toggleCart())}
          >
            <img src={CART_ICON} alt="Cart" className="w-6 h-6" />
            <span>{cartCount}</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
