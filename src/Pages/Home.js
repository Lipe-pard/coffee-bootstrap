import Acessorios from "../Components/Acessorios"
import CoffeeHome from "../Components/CoffeeHome"
import Inicio from "../Components/Inicio"
import Capsulas from "../Components/Capsulas"
import Footer from '../Components/Footer'

const Home = () => {
    return(
        <>
        <Inicio />
        <CoffeeHome/>
        <Acessorios/>
        <Capsulas/>
        <Footer />
        </>
    )
}

export default Home