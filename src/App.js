import './App.scss';
import Form from './component/Form';
import Login from './component/Login';
import Main from './component/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './component/Cart';
import Categories from './component/Categories ';

function App() {
  return (
    <>
    
<BrowserRouter>
        <Routes>
          <Route path='/' Component={Main}></Route>
          <Route path='/form' element={<Form/>} > </Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/categories' element={<Categories/>}></Route>
        </Routes>
  </BrowserRouter>
   
    </>
  );
}

export default App;
