import About from "./About";
import Firstsection from "./FisrtSection"
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import Header from './Header';
import Footer from './Footer';
import PromoBoard from "./PromoBoard";
import Slide from "./Slide";
const Main = () => {
    
    return (
        <> 
        <Slide />
        <Header />
        <PromoBoard/>
         <Firstsection/>
         <SecondSection/>
         <Firstsection/>
         <SecondSection/>
        <ThirdSection/>
        <About/>

        <Footer/>
        </>
    )
}

export default Main;