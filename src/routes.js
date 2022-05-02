import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Contacts from './Pages/Contacts'

const Routers = () => {
  return(
      <>
       <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/loja' element={<Shop />}/>
           <Route path='/contatos' element={<Contacts />}/>
       </Routes>
      </>
  )
}

export default Routers