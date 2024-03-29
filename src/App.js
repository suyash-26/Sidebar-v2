import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home'; 
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Serrvice from './pages/Service/Serrvice';

function App() {
  return (
   <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Serrvice/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
