import './App.scss';
import NavBarComponent from './components/NavbarComponent/NavbaraComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBarComponent />
        <Routes>
          <Route path='/' element={<Shop />}></Route>
          <Route path='/mens' element={<ShopCategory category='mens' />}></Route>
          <Route path='/women' element={<ShopCategory category='womens' />}></Route>
          <Route path='/product' element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
