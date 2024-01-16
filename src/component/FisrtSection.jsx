// import sponsorImg from '../component/asset/sponsored items.png'
import { useEffect,useState } from 'react'

const Firstsection = () => {

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
            <section className='sponsored-items' >
                        <h1>Sponsored items</h1>        


                <div className='flex'>
                        {product.map(product =>(
                        <div key={product.id}>
                                <a href="/categories"> <img src={product.image} alt="" /></a>
                                    <p> {product.title}</p>
                                    <h1>₦{product.price}</h1>
                        </div> 
                        ))}
                </div>

            </section>
        </>
    )
}

export default Firstsection;