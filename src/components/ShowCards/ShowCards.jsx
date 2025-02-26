import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import noImageAval from '../../assets/noImageAval3.jpg';
import plus from '../../assets/plus.svg';
import sadFace from '../../assets/sadFace.svg';
import tick from '../../assets/tick.svg';
import cross from '../../assets/cross.svg';
import useCartAnimation from '../../hooks/userCartAnimation';
import { handleAddToCart } from '../../utils/cartUtils';
import { fetchProducts } from '../../utils/fetchProducts';

const ShowCards = ({ type, name }) => {
  const [products, setProducts] = useState([]);
  const [searchedWord, setSearchedWord] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null); 
  
  const cartItems = useSelector((state) => state.cart?.cartItems);
  const { rotating, triggerRotation } = useCartAnimation();
  const dispatch = useDispatch();

  const handleAddToCartClick = (product) => {
    handleAddToCart(product, dispatch, triggerRotation);
  };

  const handleImageClick = (product) => {
    setSelectedProduct(product); 
  };

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.category.name === type &&
      product.title.toLowerCase().includes(searchedWord.toLowerCase())
  );

  return (
    <div className="flex flex-col justify-center items-center space-y-4 w-full relative">
      <h1 className="">{name}</h1>

      <div className="w-80 p-4 border-1 rounded-lg">
        <input
          type="text"
          placeholder="Search a product... "
          onChange={(e) => setSearchedWord(e.target.value)}
          className="outline-none"
          value={searchedWord}
        />
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid place-items-center justify-center xl:gap-4 md:gap-8 sm:gap-2 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full max-w-screen-lg">
          {filteredProducts.map((product) => {
            const isInCart = cartItems.some((item) => item.id === product.id);

            return (
              <div key={product.id} className="relative bg-white cursor-pointer w-56 h-60 rounded-lg">
                <div className="relative w-full h-4/5 hover:scale-105 transition duration-300">
                  <img
                    src={product.images}
                    alt={product.title}
                    className="mb-2 w-full h-full rounded-lg object-cover cursor-pointer"
                    onError={(e) => { e.target.src = noImageAval; }}
                    onClick={() => handleImageClick(product)}
                  />
                  <div className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-1 px-2">
                    {product.category.name}
                  </div>
                  <div className={`absolute m-2 top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full ${isInCart ? 'bg-black' : 'bg-white'}`}>
                    <img
                      src={isInCart ? tick : plus}
                      alt="plusBtn"
                      className={`w-6 h-6 cursor-pointer transition-transform duration-300 ${rotating[product.id] ? 'rotate-360' : ''}`}
                      onClick={() => handleAddToCartClick(product)}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="mt-2 text-sm font-light">{product.title}</h2>
                  <p className="text-lg font-medium">{product.price}$</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center m-auto text-center gap-3 mt-5">
          <img src={sadFace} alt="No products found" className="w-22 h-22" />
          <p className="font-semibold">Nothing Related :(</p>
        </div>
      )}

      {selectedProduct && (
        <div className="fixed md:top-18 top-17 right-0 w-90 md:h-[94vh] h-[92vh] bg-white shadow-lg p-6 transition-transform transform translate-x-0 flex flex-col gap-2 border rounded-md overflow-auto">
          <div className="flex justify-between items-center">
            <h2 className="font-medium text-xl">Detail</h2>
            <img
              src={cross}
              alt="Close"
              className="h-6 w-6 cursor-pointer"
              onClick={() => setSelectedProduct(null)}
            />
          </div>
          <div className="w-full flex justify-center p-3">
            <img
              src={selectedProduct.images}
              alt={selectedProduct.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <p className="font-medium text-2xl text-center">{selectedProduct.price}$</p>
          <h2 className="text-lg font-bold mt-2 text-center">{selectedProduct.title}</h2>
          <p className="font-light text-sm text-center">{selectedProduct.description}</p>
        </div>
      )}
    </div>
  );
};

export default ShowCards;