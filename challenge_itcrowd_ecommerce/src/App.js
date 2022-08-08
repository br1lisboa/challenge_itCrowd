import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Login from './pages/Login';
import { Routes, Route /* Navigate */ } from 'react-router-dom';
//import { useSelector } from 'react-redux';

function App() {
  //const user = useSelector((state) => state.user.currentUser);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products/:category' element={<ProductList />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<Login />}>
        {/* {user ? <Navigate to="/" /> : <Login />} */}
      </Route>
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default App;
