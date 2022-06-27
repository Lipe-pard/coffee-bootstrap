import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Contacts from './Pages/Contacts'
import NotFound from './Pages/NotFound'
import LayoutShop from './Pages/Layouts/LayoutShop'
import Login from './Pages/Login'
import LayoutLogin from './Pages/Layouts/LayoutLogin'
import Regiter from './Pages/Register'
import ProdutoView from './Pages/ProdutoView'
import LayoutAdmin from './Pages/Layouts/LayoutAdmin'
import DashboardAdmin from './Pages/DashboardAdmin'
import AddProduct from './Pages/AddProduct'
import UpdateProduct from './Pages/UpdateProduct'
import Bag from './Pages/Bag'
import BagProvider from './Providers/bagProvider'
import AuthProvider from './Providers/authProvider'
import InfoCep from './Pages/InfoCep'

const Routers = () => {
  return(
      <>
      <AuthProvider>
        <BagProvider>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='loja' element={<LayoutShop/>}>
                <Route index element={<Shop/>}/>
            </Route>
            <Route path='produto/:prodId' element={<ProdutoView/>}/>
            <Route path='login' element={<LayoutLogin />}>
              <Route index element={<Login />}/>
              <Route path="cadastro" element={<Regiter />} />
            </Route>
            <Route path='/admin' element={<LayoutAdmin/>}>
              <Route index element={<DashboardAdmin/>}/>
              <Route path="adicionar-produto" element={<AddProduct/>}/>
              <Route path="editar-produto/:prodId" element={<UpdateProduct/>}/>
            </Route>
            <Route path="/sacola">
              <Route index element={<Bag />}/>
              <Route path='informe-cep' element={<InfoCep/>}/>
            </Route>
            <Route path='contatos' element={<Contacts />}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </BagProvider>
      </AuthProvider>
      </>
  )
}

export default Routers