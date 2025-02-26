import { useState } from 'react';
import { useSelector } from 'react-redux';
import backChevron from '../assets/backChevron.svg';
import calendar from '../assets/calendar.svg';
import parcelBox from '../assets/parcelBox.svg';
import ShowClickedOrderDetails from './ShowClickedOrderDetails';
import shoppingCart2 from "../assets/shoppingCart2.svg"

const MyOrder = () => {
  const orders = useSelector((state) => state.cart.orders);

  const [showSummary, setShowSummary] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // console.log(orders);

  return (
    <div className="flex flex-col justify-between items-center relative mt-6">
      {/* Back Button (Toggles Views) */}
      <img
        src={backChevron}
        alt="Back"
        className={`w-6 h-6 absolute top-0 left-5 cursor-pointer ${
          orders.length === 0 ? `hidden` : ' '
        }`}
        onClick={() => {
          setShowSummary(!showSummary);
          setSelectedOrder(null);
        }}
      />

      <h2>MyOrders</h2>

      {orders.length === 0 ? (
        <div className="flex flex-col justify-between items-center md:w-full w-[70%] ">
          <img src={parcelBox} alt="" className="w-20 h-20" />
          <p className="font-semibold text-center">
            Nothing yet, add some products and check them out :)
          </p>
        </div>
      ) : selectedOrder ? (
        <ShowClickedOrderDetails order={selectedOrder} onBack={() => setSelectedOrder(null)} />
      ) : showSummary ? (
        // Show Summary View (Each Order Separately)
        <div className=" rounded-lg p-4  w-[25rem] mt-5 flex flex-col gap-3 ">
          {orders.map((order) => (
            <div
              key={order.id}
              className=" mt-2 border border-black rounded-sm flex justify-between items-center p-4"
            >
              <div>
                <p className="flex items-center gap-2">
                  <span>
                    <img src={calendar} alt="" className="w-4 h-4" />
                  </span>{' '}
                  {order.date}
                </p>
                <p className="flex items-center gap-2">
                  {' '}
                  <span>
                    <img src={shoppingCart2} alt="" className="w-4 h-4" />
                  </span>{' '}
                  {order.items.length}
                </p>
              </div>
              <p className="text-xl font-bold text-right mr-8">
                ${order.totalAmount}{' '}
                <span className="cursor-pointer" onClick={() => setSelectedOrder(order)}>
                  ➜
                </span>
              </p>
            </div>
          ))}
        </div>
      ) : (
        // Show Order Details View
        <div className="w-full p-4 h-[90vh] overflow-auto">
          {orders.map((order) => (
            <div key={order.id} className="mb-6 border border-gray-200 shadow-md">
              <h3 className="font-bold mb-2 p-4 border-b-2 border-b-gray-200">
                Order id : {order.id}
              </h3>
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="space-y-4 flex gap-4 pl-4 pr-4 border-b-2 mt-4 border-gray-200"
                >
                  <div className="flex items-center space-x-4 pb-2">
                    <img src={item.images} alt="" className="w-20 h-20 rounded-lg object-cover" />
                  </div>
                  <div className="flex flex-col flex-1">
                    <p className="text-sm font-light">{item.title}</p>
                    <p className="text-lg font-medium">${item.price * item.quantity}</p>
                    <div className="bg-gray-300 w-8 flex justify-center rounded-md">
                      <p>{item.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrder;
