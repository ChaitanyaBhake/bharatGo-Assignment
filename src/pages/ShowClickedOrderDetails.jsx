const ShowClickedOrderDetails = ({ order, onBack }) => {
  return (
    <div className="w-full  h-fit-content border border-gray-200 mt-10 overflow-auto flex flex-col justify-center">
      <h3 className="font-bold mb-2 p-4 border-b-2 border-b-gray-200">Order id : {order.id}</h3>
      {order.items.map((item) => (
        <div
          key={item.id}
          className="p-2 space-y-2 flex gap-4 pl-4 pr-4 border-b-2 mt-2  border-gray-200"
        >
          <img src={item.images} alt="" className="w-20 h-20 rounded-lg object-cover" />
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-light">{item.title}</p>
            <p className="text-lg font-medium">${item.price * item.quantity}</p>
            <div className="bg-gray-300 w-8 flex justify-center rounded-md">
              <p>{item.quantity}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="flex flex-col p-4 items-center ">
        <button onClick={onBack} className="cursor-pointer w-[240px] bg-blue-400 rounded-2xl py-2 text-white font-semibold">
          ← Orders list
        </button>
      </div>
    </div>
  );
};

export default ShowClickedOrderDetails;
