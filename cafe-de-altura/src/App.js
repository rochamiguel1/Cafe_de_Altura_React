
import './App.css';
import BestCoffee from './components/BestCoffee/BestCoffee';
import CoffeeList from './components/CoffeeList/CoffeeList';
import Conditions from './components/Conditions/Conditions';
import Contact from './components/Contact/Contact';
import Copyrights from './components/Copyrights/Copyrights';
import Footer from './components/Footer/Footer';
import FrecuencyQuestions from './components/FrequencyQuestions/FrecuencyQuestions';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Tienda from './components/Tienda/Tienda';


function App() {
  return (
    <div className="App">

      < Header />
      < BestCoffee />
      < Conditions />
      < CoffeeList />
      < FrecuencyQuestions />
      < Shop />
      < Contact />
      < Footer />
      < Copyrights />
       

    </div>
  );
}

export default App;
