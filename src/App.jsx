import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import ShowCards from './components/ShowCards/ShowCards';
import Error404 from './pages/Error404';
import Homepage from './pages/Homepage';
import MyAccount from './pages/MyAccount';
import MyOrder from './pages/MyOrder';

function App() {
  return (
    <div className="flex flex-col mt-20 items-center">
      <Router>
        <Navbar />
        <Cart />
        <Routes>
          <Route 
           path="/" 
           element={<Homepage />} />

          <Route
           path="/clothes" 
           element={<ShowCards type={'Clothes'} name={'Clothes'} />} />

          <Route
            path="/electronics"
            element={<ShowCards type={'Electronics'} name={'Electronics'} />}
          />
          <Route
            path="/furnitures"
            element={<ShowCards type={'Furniture'} name={'Furnitures'} />}
          />

          <Route
           path="/toys" 
           element={<ShowCards type={'Toys'} name={'Toys'} />} />

          <Route path="/myOrders" element={<MyOrder />} />
          <Route path="/myAccount" element={<MyAccount />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
