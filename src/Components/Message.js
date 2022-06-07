import styles from './Message.module.css';
import {useState, useEffect} from 'react'

//Passa o msg que é a menssagem que vai ser exibida e passa também o type EX: erro, sucess.
//Nesse caso se ultiliza um class dinamica que altera o estilo da menssgem dependendo do tipo dela

const Message = ({type, msg}) => {

    //State para mudar a visibilidade da menssagem
    const [visible, setVisible] = useState(false)
 
    //Se ultiliza o useEffect para fazer um timer para a menssagem
    useEffect(()=>{
       
      //Agora se faz um if ao contrario onde vê se a menssagem não existe e se existir ela cai no else

      if(!msg){
          //Caso a menssagem não exista setamos o setViseble como false
          setVisible(false)
          return
      }

      //Agora caso a menssagem exista nos retornamos o setViseble como true
      setVisible(true)
      //Agora criamos um timer onde depois de 3 segundos muda o setViseble para false
      const timer = setTimeout(() => {
        setVisible(false)
      }, 3000)

      return () => clearTimeout(timer)

    }, [msg])//Passa a msg como referenci para o useEffect

    return(
        <>
        {visible && (
          <div className={`${styles.message} ${styles[type]}`}> {msg} </div>
        )}
        </>
    )
}

export default Message