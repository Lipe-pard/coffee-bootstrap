import './AmountProd.css';
import {useState} from 'react'
import { Button } from 'react-bootstrap'

const AmountProd = (props) => {
    
    const [count, setCount] = useState(1)

    function sub(){
        if(count !== 1){
            setCount(count - 1)
        }
    }

    const valueProd = (props.value)

    const dadosCount = {
        id: (props.idProd), 
        count: count
    }


    function storageValueCount(){
        localStorage.setItem("dadoCount", JSON.stringify(dadosCount))
    }

    return(
        <div className="d-flex justify-content-between" id="countValue">
        <div className='d-flex' id="contProd">
          <Button id="subBtn" onClick={() => sub()}> - </Button>
          <div id="display" count={count}> {count} </div>
          <Button id="plusBtn" onClick={() => setCount(count + 1)}> + </Button>
        </div>
        <h5> R$ {valueProd * count} </h5>
        {storageValueCount()}
        </div>
    )
}

export default AmountProd
