import cart from '../component/asset/cart.svg';
import { Link } from 'react-router-dom';
 const  Header = (props1) => {
    return (
      <>
        <header >
            <section className="flex">
                <h4> <Link to="/">PAUL</Link></h4>
                <p> <Link>Store Locator </Link></p>
                <p> <Link>Sell on  Our Store </Link></p>
                <input type="search" name="search" placeholder="Search for product brand and categories " />
                <p><Link to="/form">Login/Sign up</Link> </p>

                <div className='flex'>
                    <div className='flex '>
                       <Link to="/cart"> <img src={cart} alt="" /></Link> 
                        <Link to="/cart"> My cart</Link>
                    </div>
                    <div className='cart'>
                        <p>:{props1.counter  }</p>
                    </div>
                </div>
            </section>

            <nav >
                <ul className='flex'>
                   <li><Link to="/categories">  All Categories</Link></li> 
                   <li><Link to="/categories"> ComputerAccesories</Link></li> 
                   <li><Link to="/categories"> Phone and Tablets </Link></li> 
                   <li><Link to="/categories"> Electronics </Link></li> 
                   <li><Link to="/categories">  Fashion</Link></li> 
                   <li><Link to="/categories"> Home and Kitchen </Link></li> 
                   <li><Link to="/categories"> Kids and Toy</Link></li> 
                   <li><Link to="/categories">Other Categories </Link></li> 
                </ul>
            </nav>

        </header>
      </>
    )
 }

 export default Header;