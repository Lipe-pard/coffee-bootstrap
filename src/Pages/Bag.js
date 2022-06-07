import './Bag.css';
import CardBag from '../Components/CardBag'
import HeaderBag from '../Components/HeaderBag'
import ConfirmPay from '../Components/ConfirmPay';

const Bag = () => {

    return(
        <>
                <HeaderBag/>
            <div className='d-flex'>
                <div id="containerScroll">
                    <CardBag/> 
                </div>
                <ConfirmPay />
            </div>
        </>
    )
}

export default Bag