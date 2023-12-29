import furnitureImg from '../component/asset/funiture1.png';
import equipment from '../component/asset/furniture2.png';
import kidWear from '../component/asset/kids wear.png';
import tvImg from '../component/asset/tv.png';
const ThirdSection = () => {
    return (
        <>
          <section className="Third-section" >
          <div className="Third-section" >
                <img src={furnitureImg} alt="" />
                <h1> HOME FURNISHINGS</h1>
                <p> Get Up To 70% Off</p>
                <p>SHOP NOW</p>
            </div>
            <div className="Third-section" >
                <img src={equipment} alt="" />
                <h1> FITNESS TOOLS & EQUIPMENT</h1>
                <p> Get Up To 70% Off</p>
                <p>SHOP NOW</p>
            </div>
            <div className="Third-section" >
                <img src={kidWear} alt="" />
                <h1> KIDS WEARS & ACCESSORIES</h1>
                <p> Get Up To 70% Off</p>
                <p>SHOP NOW</p>
            </div>
            <div className="Third-section" >
                <img src={tvImg} alt="" />
                <h1> TOP DEALS ON TELEVISIONS</h1>
                <p> Get Up To 70% Off</p>
                <p>SHOP NOW</p>
            </div>
          </section>
        </>
    )
}
export default ThirdSection;