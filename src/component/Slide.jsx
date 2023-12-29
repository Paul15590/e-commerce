import iconClose from '../component/asset/close-square.svg'
import iconStar from '../component/asset/star.svg'
import iconLocation from '../component/asset/location-pin-alt.svg'
import iconSell from '../component/asset/sell.svg'
import iconHome from '../component/asset/home-1.svg'
import iconCart from '../component/asset/cart - Copy.svg'
import iconRight from '../component/asset/right-circle.svg'
import iconCart2 from '../component/asset/cart - Copy.svg';
import iconHome2 from '../component/asset/home-1.svg';
import iconHamburger from '../component/asset/hamburger-menu.svg';
import iconFashion from '../component/asset/fashion-heart-like.svg'
import iconBrowse from '../component/asset/browse.svg';
import iconComputer from '../component/asset/computer.svg';
import iconPhone from '../component/asset/phone (1).svg';
import iconDeal from '../component/asset/deal.svg';
import { useState } from "react";


const Slide = ()=> {
   
    const [navDisplay,setNavDisplay]=useState(false);
    const [deviceWidth,setdeviceWidth]= useState(window.innerWidth);

    const openNav = ()=>{
        setNavDisplay(true);
        console.log('1234');
    }
    const closeNav =()=> {
        setNavDisplay(false);
        console.log("1234");
    }
    window.onresize=()=>{
        setdeviceWidth(window.innerWidth)
    }
    
    return (
        <>

        {/* {navDisplay &&( */}
            <div className='slide' style={{display:(deviceWidth < 750) ? (navDisplay ? "block" : "none") : "none"}}>
            <div>
                    <div>
                        <div className='flexi'>
                            <div className='flexi'>
                            <img src={iconClose} alt="" onClick={closeNav} />
                            <h3><a href="/"> PAUL</a></h3>
                            </div>
                            <div>
                                <img src={iconHome} alt="" />
                                <img src={iconCart} alt="" />
                            </div>
                        </div>
                        <div className='flexi'>
                            <button><a href="/Login"> <h4>Login</h4></a></button>
                            <button><a href="/Form"> <h4>Signup</h4></a></button>
                        </div>
                    </div>
            </div>

            <div className='flexi second'>
                    <div>
                        <img src={iconLocation} alt="" />
                        <p>Track Order</p>
                    </div>
                    <div>
                        <img src={iconStar} alt="" />
                        <p>Pending Order</p>
                    </div>
                    <div>
                        <img src={iconSell} alt="" />
                        <p>Sell on Paul</p>
                    </div>
                    <div>
                        <img src={iconHome} alt="" />
                        <p>Physical Stores</p>
                    </div>
            </div>

            <div className='third'>
                <h3> Categories</h3>
                <div  className='flexi'> 
                    <p> Computers and Acessories</p>
                    <img src={iconRight} alt="" />
                </div>
                <div className='flexi'> 
                    <p>Phones and Tablets </p>
                    <img src={iconRight} alt="" />
                </div>
                <div className='flexi'> 
                    <p> Electronics</p>
                    <img src={iconRight} alt="" />
                </div>
                <div className='flexi'> 
                    <p>Paul Fashion </p>
                    <img src={iconRight} alt="" />
                </div>
                <div className='flexi'> 
                    <p>Home and Kitchen </p>
                    <img src={iconRight} alt="" />
                </div>
                <div className='flexi'> 
                    <p>Baby,kids and Toys </p>
                    <img src={iconRight} alt="" />
                </div>
                <div className='flexi'> 
                    <p>Other Categories </p>
                    <img src={iconRight} alt="" />
                </div>
                <div className='flexi'> 
                    <p> Groceries</p>
                    <img src={iconRight} alt="" />
                </div>
                <div className='flexi'> 
                    <p> Inte 11th Gen Campaign</p>
                    <img src={iconRight} alt="" />
                </div>
            </div>
         </div>
        {/* )} */}


         <div className="second-header">
                <div className='flex'>
                    <div className='flex'>
                        <img src={iconHamburger} alt="" onClick={openNav} />
                        <h3><a href="/">PAUL</a></h3>
                    </div>
                    <div>
                        <img src={iconHome2} alt="" />
                        <img src={iconCart2} alt="" />
                    </div>
                </div>
                <input type="text" placeholder="Search for products,brand and categories..."/>
                <div className='flex'>
                    <div>
                        <img src={iconBrowse} alt="" />
                        <p>Browse All</p>
                    </div>
                    <div>
                        <img src={iconFashion} alt="" />
                        <p>Fashion</p>
                    </div>
                    <div>
                        
                    <img src={iconComputer} alt="" />
                        <p>Computers</p>
                    </div>
                    <div>
                        
                    <img src={iconPhone} alt="" />
                        <p>Phones</p>
                    </div>
                    <div>
                        
                    <img src={iconDeal}alt="" />
                        <p>Deals</p>
                    </div>
                </div>
            </div>    

        
        </>
    )
}

export default Slide;