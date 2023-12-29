import Footer from "./Footer";
import Header from "./Header";
import Slide from "./Slide";
import sideArrow from '../component/asset/right-chevron.svg';
import cartItems from '../component/asset/cart-items.png';
import starIcon from '../component/asset/star2.svg';
import { useState } from "react";
import { Link } from "react-router-dom";

const Categories = ()=> {
    const [cartCounter,setCartCounter]=useState(0);
    
    const increasecartCounter=() => {
        setCartCounter(cartCounter + 1)
    };
    const article= <>
    <img src={cartItems} alt="" width={240}/>
    <p>Hp Laptop 14sdq505nia</p>
    <div className="flex">
        <h3>₦540,000</h3>
        <p>₦590,000</p>
        <button>-10%</button>
    </div>
    
    <p>Sold by <a href="/">Paul</a></p>
        <div>
            <img src={starIcon} alt="" />
            <img src={starIcon} alt="" />
            <img src={starIcon} alt="" />
            <img src={starIcon} alt="" />
            <img src={starIcon} alt="" />
            <span>No review yet</span>

        </div>
        <button id="last-child" onClick={increasecartCounter}> <Link to=""><h4>Add To Cart</h4> </Link> </button>
</>;

    return (
        <>
            <Slide/>
            <Header cartCounter={cartCounter}/>
                <section className="categories">
                    <div className="first-div ">
                        <p>Home</p><img src={sideArrow} alt="" />
                        <p>Computer and Accessories</p><img src={sideArrow} alt="" />
                        <h4>Laptops</h4>
                    </div>

                    <div className="second-div flex">
                        <h1>Hybrid Computers</h1>

                        <div>
                            <span>sort by:</span>
                            <button>Relevance</button>
                            <button>Price-High to low</button>
                            <button>Price-Low to high</button>
                        </div>
                    </div>
                <div className="div-article">
                    <article>  {article} </article>
                    <article>  {article} </article>
                    <article>  {article} </article>
                    <article>  {article} </article>
                    <article>  {article} </article>
                    <article>  {article} </article>
                    <article>  {article} </article>
                    <article>  {article} </article>
                    <article>  {article} </article>
                    <article>  {article} </article>
                    <article>  {article} </article>
                    <article>  {article} </article>
                    <article>  {article} </article>
                    <article>  {article} </article>
                    <article>  {article} </article>
                    <article>  {article} </article>
                    <article>  {article} </article>
                    <article>  {article} </article>
                    <article>  {article} </article>
                    <article>  {article} </article>
                    <article>  {article} </article>
                    {/* <article>  {article} </article>
                    <article>  {article} </article>
                    <article>  {article} </article>
                    <article>  {article} </article>
                    <article>  {article} </article>
                    <article>  {article} </article>
                    <article>  {article} </article> */}
                </div>
                    

                </section>
            <Footer/>
        </>
    )
}

export default Categories;