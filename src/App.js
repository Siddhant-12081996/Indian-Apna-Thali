import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "./Components/Cards";
import Footer from "./Components/Footer"
import {Routes,Route} from "react-router-dom"
import CardsDetails from './Components/CardsDetails';
function App() {
  return (
   <>
  <Header/>
  <Routes>
    <Route path="/" element={<Cards/>}/>
    <Route path="/cart/:id" element={<CardsDetails/>}/>
  </Routes>

  <Footer/>
   </>
  );
}

export default App;
