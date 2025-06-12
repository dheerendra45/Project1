import Consultant from "../components/Jobopportunity/consultant.jsx";
import Footer from "../components/Jobopportunity/footer.jsx";
import Hero from "../components/Jobopportunity/Hero.jsx";
import Join from "../components/Jobopportunity/join.jsx";
import Work from "../components/Jobopportunity/work.jsx";

export default function Jobopportunity(){
    return (
        <>
            <Hero/>
            <Join/>
            <Work/>
            <Consultant/>
            <Footer/>
        </>
    );
}