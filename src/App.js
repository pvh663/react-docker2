import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home.js';
import Header from './components/Header.js';
import { Route, Routes } from 'react-router-dom';
import Details from './components/Details.js';
 
function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/detail' element={<Details />}></Route>
      </Routes>
 
  );
}

export default App;