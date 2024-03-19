import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Navbar from "./Components/Navbar"
import Customization from './Pages/Customization';
import Login from './Pages/Login';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/customization' element={<Customization />} /> */}
        <Route path='/Login' element={<Login/>} />
        {/* <Route path='/Signup' element={<Customization />} /> */}
      </Routes>
    </div>
  );
}

export default App;
