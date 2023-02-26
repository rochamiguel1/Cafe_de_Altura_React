import './App.css';
import { useState, useEffect, createContext } from 'react';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';

export const ProductsContext = createContext()

function App() {

  const [coffeeBag, setcoffeeBag] = useState([])
  const [added, setAdded] = useState(JSON.parse(localStorage.getItem('cart')) || [])





  useEffect(() => {
    fetch("https://cafe-de-altura-api.vercel.app/api/products")
      .then(res => res.json())
      .then(data => setcoffeeBag(data.products))
      .catch(error => (error))
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(added))
  }, [added])


  return (

    <BrowserRouter>
      <ProductsContext.Provider value={{ coffeeBag, setcoffeeBag, added, setAdded }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
      </ProductsContext.Provider>
    </BrowserRouter>

  );
}

export default App;
