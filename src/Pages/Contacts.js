import {useNavigate} from 'react-router-dom'
const Contacts = () => {
  let navigate = useNavigate();
    return(
        <>
         <h1> Contacts </h1>
         <button onClick={() => {
             navigate('/');
             }}> Volta para home </button>
        </>
    )
}

export default Contacts