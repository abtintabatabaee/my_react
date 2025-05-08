
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
/*import 'react-toastify/ReactToastify.css';*/
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import ShopByBrand from './pages/ShopByBrand';
import BrandProducts from './pages/BrandProducts';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetail from './pages/ProductDetail';
import Store from './pages/Store';
import CreateAccount from './pages/CreateAccount';




function App() {
  return(
<BrowserRouter basename="/my_react">
<ToastContainer/>
    <Routes>
        <Route>
        <Route path='/' element={<Home/>} />
        <Route path='/ShopByBrand' element={<ShopByBrand/>} />
        <Route path='/Home/BrandProducts/:name/:id' element={<BrandProducts/>} />
        <Route path='/ShoppingCart' element={<ShoppingCart/>} />
        <Route path='/ProductDetail/:name/:ID' element={<ProductDetail/>}/>
        <Route path='/Store' element={<Store/>} />
        <Route path='/CreateAccount' element={<CreateAccount/>} />
       

        </Route>

    </Routes>


</BrowserRouter>
  )
 
}

export default App;
