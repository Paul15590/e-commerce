import promo from '../component/asset/promoimage.jpg'
const PromoBoard =() => {
    return (
        <>
        <section className='promo-board'>
                <div className='promo-board'>
                    <div id='big'> <img src={promo} alt="" id='big' width={`100$%`}/></div>

                </div>

                <div className='about flex'>

                    <div id='about'>Paul Blog</div>
                    <div>Pay Bills</div>
                    <div> Offline store</div>
                    <div>Brand Store</div>
                    <div>Book Flight</div>
                    <div>Watch TV</div>
                </div>
            </section>
        </>
    )
}

export default PromoBoard;