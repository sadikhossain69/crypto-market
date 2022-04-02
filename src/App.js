import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Coins from './components/Coins/Coins'
import Blog from './components/Blog/Blog'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/home' element={<Home/>} ></Route>
        <Route path='/coins' element={<Coins/>} ></Route>
        <Route path='/blog' element={<Blog/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='*' element={<NotFound/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
