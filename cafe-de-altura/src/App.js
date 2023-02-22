import './App.css';
import { useState, useEffect, createContext } from 'react';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';

export const ProductsContext = createContext()

function App() {

  const [coffeeBag, setcoffeeBag] = useState([])

  useEffect(() => {
    fetch("https://cafe-de-altura-api.vercel.app/api/products")
      .then(res => res.json())
      .then(data => setcoffeeBag(data.products))
      .catch(error => (error))
  }, []);

  return (

    <BrowserRouter>
      <ProductsContext.Provider value={{ coffeeBag, setcoffeeBag }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Shop' element={<Shop />} />
        </Routes>
      </ProductsContext.Provider>
    </BrowserRouter>

  );
}

export default App;
