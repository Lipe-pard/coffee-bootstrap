import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Contacts from './Pages/Contacts'
import NotFound from './Pages/NotFound'

const Routers = () => {
  return(
      <>
       <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/loja' element={<Shop />}/>
           <Route path='/contatos' element={<Contacts />}/>
           <Route path='*' element={<NotFound/>}/>
       </Routes>
      </>
  )
}

export default Routers