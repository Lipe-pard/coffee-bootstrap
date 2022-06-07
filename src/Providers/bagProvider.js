import {useState, useContext, useEffect, createContext} from 'react'

const BagContext = createContext();

const BagProvider = ({children}) => {

    const [idItens, setIdItens] = useState([]);

    useEffect(()=>{
        const bagData = localStorage.getItem('bagItens')
        const bag = JSON.parse(bagData)
        if(bag){
            setIdItens(bag)
        }
    }, [])

    return(
        <BagContext.Provider value={[
            idItens, setIdItens
        ]}>
            {children}
        </BagContext.Provider>
    )
}

export const saveBagLocalStorage = (idItens) => {
	localStorage.setItem('bagItens', JSON.stringify(idItens))
}

export const useBag = () => {
    const [idItens, setIdItens] = useContext(BagContext)
    return {idItens, setIdItens}
 }
 
 export default BagProvider