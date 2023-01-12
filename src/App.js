import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navhead from './components/Navhead';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  return (
    <>
    <Navhead/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/search' element={<Search/>}/>
    </Routes>
    </>
  );
}

export default App;
