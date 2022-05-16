import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Contacts from './Pages/Contacts'
import NotFound from './Pages/NotFound'
import LayoutShop from './Pages/Layouts/LayoutShop'
import Login from './Pages/Login'

const Routers = () => {
  return(
      <>
       <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='loja' element={<LayoutShop/>}>
              <Route index element={<Shop/>}/>
           </Route>
           <Route path='/contatos' element={<Contacts />}/>
           <Route path='*' element={<NotFound/>}/>
           <Route path='/login' element={<Login />}/>
       </Routes>
      </>
  )
}

export default Routers