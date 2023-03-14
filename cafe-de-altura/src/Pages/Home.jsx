import BestCoffee from "../components/BestCoffee/BestCoffee";
import Conditions from "../components/Conditions/Conditions";
import Contact from "../components/Contact/Contact";
import Copyrights from "../components/Copyrights/Copyrights";
import Footer from "../components/Footer/Footer";
import FrecuencyQuestions from "../components/FrequencyQuestions/FrecuencyQuestions";
import Header from "../components/Header/Header";
import Place from "../components/Place/Place";

import Novedades from "../components/Novedades/Novedades";

export default function Home() {

    return (
        <>
            <Header />
            < BestCoffee />
            < Conditions />
            < Novedades />
            < FrecuencyQuestions />
            < Place />
            < Contact />
            < Footer />
            < Copyrights />
        </>
    )
}
