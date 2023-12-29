import Slide from "./Slide";
import Header from "./Header";
import Footer from "./Footer";
import cartItems from '../component/asset/cart-items.png';
import iconMinus from '../component/asset/minus.svg';
import iconAdd from '../component/asset/add.svg';
import iconDelete from '../component/asset/delete.svg';
import { useState } from "react";

const Cart=()=> {

    const [counter,setCounter] = useState(0);
    const [delet,setDelet]=useState(false);

    const deleteCart=()=> {
        setDelet(true);
        console.log('tehjt');
    }

    const increaseCounter=() => {
            setCounter(counter + 1);
        };

        const decreaseCounter=() => {
            if (counter>0){
                setCounter(counter - 1)
            }
            
        };

    return (
        <>
        <Slide />
        <Header/>
            <section className="cart">
              
              <section className="cartflex">

                {!delet &&(
                     <div className="cart">
                    
                     <div className="flex">
                         <div >
                             <img src={cartItems} alt=""  width={130}/>
                             
                                 <p>Lenovo V15 G3 Iap Laptop</p>
                                 <p> Sold by <a href="/">Paul</a></p>
                             
                         </div>
                         
                         <div>
                             <p> ₦480,000</p>
                             <div className="flex">
                                 <p id="discount">₦491,000 </p>
                                 <button>-3%</button>
                             </div>
                         </div>
                     </div>

                     <div className="flex">
                         <div className="flex">
                             <img src={iconDelete} alt="" width={30} onClick={deleteCart}/>
                             <p>REMOVE</p>
                         </div>
                         <div className="flex" >
                             <img src={iconMinus} alt="" width={25}
                             onClick={decreaseCounter}/>
                             <p id="action">{counter}</p>
                             <img src={iconAdd} alt="" width={25}
                             onClick={increaseCounter}/>
                         </div>
                     </div>

                 
              </div>

                )}
                
                 <aside>
                    <div>
                        <div className="cartflex"> 
                            <p>CART SUMMARY</p>
                            <p>2 Items</p>
                        </div>
                        <div className="cartflex">
                            <p> Sub Total</p>
                            <h1> ₦480,000</h1>
                        </div>
                        <p style={{color:"royalblue"}}>Excluding delivery charges</p>
                        <button> Continue to Checkout</button>
                    </div>
                    <div>
                        <h3>Returns are easy</h3>
                        <p style={{fontSize:14, color:"orange"}}>Free return within 7days for All elegible items</p>
                        <a href="/"> Details</a>
                    </div>
                 </aside>
              </section>
              <div>

              </div>
            </section>
        <Footer/>
        </>
    )
}

export default Cart;