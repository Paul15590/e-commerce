
import sideArrow from '../component/asset/right-chevron.svg';
// import cartItems from '../component/asset/cart-items.png';
import starIcon from '../component/asset/star2.svg';
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

const Categories = ({handleCounter})=> {
    const [product,setProduct]=useState([])
    useEffect( () => {
        fetch("https://fakestoreapi.com/products", {method:"GET"})
        .then((res) => res.json())
        .then(response => {
            setProduct(response)
        })
        .catch(err => {
          console.log(err)
        })
      },[])


    return (
        <>
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

        {product.map(product =>(
            <article key={product.id}>  <img src={product.image} alt="" width={240}/>
            <p>{product.title}</p>
            <div className="flex">
                <h3>{product.price}</h3>
                <p>{product.price}</p>
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
                <button id="last-child" onClick={handleCounter}> <Link to=""><h4>Add To Cart</h4> </Link> </button>
        </article>
        ))}    
                </div>
                    

                </section>
        </>
    )
}

export default Categories;