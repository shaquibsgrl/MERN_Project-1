
import './App.css';
import { Navbar } from './Components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Shoppage from './Pages/Shoppage';
import { ProductDetails } from './Pages/ProductsDetails';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/collection/all' element={<Shoppage/>}></Route>
        <Route path='/collection/all/:_id' element={<ProductDetails/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
