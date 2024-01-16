import About from "./About";
import Firstsection from "./FisrtSection"
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import PromoBoard from "./PromoBoard";
const Main = (props) => {
  
    return (
        <> 
        <PromoBoard/>
         <Firstsection/>
         <SecondSection/>
         <Firstsection/>
         <SecondSection/>
        <ThirdSection/>
        <About/>

        </>
    )
}

export default Main;