// import { useEffect, useState } from 'react';
// import itemsImg from '../component/asset/items.png'
import {useState,useEffect} from 'react';

const SecondSection = () => {
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
            <section className="deal-items">
            
                <div>
                    <h1>Today Deal </h1>
                    <p> <a href="/">See items </a></p>
                </div>

            <div className='flex '>

                {product.map(product =>(

                    <div className='flex items' key={product.id}>
                            <div>
                                <a href="/"> <img src={product.image} alt="" /></a>
                            </div>
                            <div >
                                <p>{product.title} </p>

                                <div id='deal-items'> 
                                    <h3>₦{product.price} </h3>
                                    <p>₦{product.price}  </p>
                                    <button>-10% </button>

                                </div>
                                
                                <p id='save'>you save ₦Price </p>
                            </div>
                        </div>
                ))}


                    {/* <div className='flex items'>
                        <div>
                            <a href="/"> <img src={itemsImg} alt="" /></a>
                        </div>
                        <div >
                            <p>Name Of Items </p>

                            <div id='deal-items'> 
                                <h3>₦Price </h3>
                                <p>₦Price  </p>
                                <button>-10% </button>

                            </div>
                            
                            <p id='save'>you save ₦Price </p>
                        </div>
                    </div>

                    <div className='flex items'>
                        <div>
                            <a href="/"> <img src={itemsImg} alt="" /></a>
                        </div>
                        <div >
                            <p>Name Of Items </p>

                            <div id='deal-items'> 
                                <h3>₦Price </h3>
                                <p>₦Price  </p>
                                <button>-10% </button>

                            </div>
                            
                            <p id='save'>you save ₦Price </p>
                        </div>
                    </div>

                    <div className='flex items'>
                        <div>
                            <a href="/"> <img src={itemsImg} alt="" /></a>
                        </div>
                        <div >
                            <p>Name Of Items </p>

                            <div id='deal-items'> 
                                <h3>₦Price </h3>
                                <p>₦Price </p>
                                <button>-10% </button>

                            </div>
                            
                            <p id='save'>you save ₦Price </p>
                        </div>
                    </div>
                    <div className='flex items'>
                        <div>
                            <a href="/"> <img src={itemsImg} alt="" /></a>
                        </div>
                        <div >
                            <p>Name Of Items </p>

                            <div id='deal-items'> 
                                <h3>₦Price </h3>
                                <p>₦Price  </p>
                                <button>-10% </button>

                            </div>
                            
                            <p id='save'>you save ₦Price </p>
                        </div>
                    </div>

                    <div className='flex items'>
                        <div>
                            <a href="/"> <img src={itemsImg} alt="" /></a>
                        </div>
                        <div >
                            <p>Name Of Items </p>

                            <div id='deal-items'> 
                                <h3>₦Price </h3>
                                <p>₦Price  </p>
                                <button>-10% </button>

                            </div>
                            
                            <p id='save'>you save ₦Price </p>
                        </div> */}
                    {/* </div> */}
                </div>
            </section>
        </>
    )
}
export default SecondSection;