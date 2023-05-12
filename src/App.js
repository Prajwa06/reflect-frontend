import './App.css';
import Navbar from './components/Navbar';
import Cities from './components/Cities';
import Places from './components/Places';
import { Route, Routes } from 'react-router-dom';
import Checkout from './components/Checkout';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/city" element={<Cities/>}/>
        <Route path="/place" element={<Places/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </div>
  );
  
}

export default App;
