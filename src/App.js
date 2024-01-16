import './App.scss';
import Form from './component/Form';
import Login from './component/Login';
import Main from './component/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './component/Cart';
import Categories from './component/Categories ';
import {useState } from 'react';
import GeneralLayout from './layouts/GeneralLayout';

function App() {
  const [counter,setCounter] = useState(0);
  // const [cartCounter,setCartCounter] = useState(0);
  // const increaseCounter=() => {
  //   setCartCounter(cartCounter + 1);
  //   };

  //   const decreaseCounter=() => {
  //       if (cartCounter>0){
  //           setCartCounter(cartCounter - 1)
  //       }
        
  //   };

  const handleCounter=()=>{
    setCounter(counter + 1);
  }

  return (
  <BrowserRouter>
          <Routes>
            <Route element={<GeneralLayout counter={counter} />}>
              <Route path='/' element={<Main/>}></Route>
              <Route path='/categories' element={<Categories  handleCounter={handleCounter}/>}></Route>
              <Route path='/cart' element={<Cart
               counter={counter}
               />}></Route>
            </Route>

            <Route path='/form' element={<Form/>} > </Route>
            <Route path='/login' element={<Login/>}></Route>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
