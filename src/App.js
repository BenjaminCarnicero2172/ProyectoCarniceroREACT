
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { CartProvider } from './contexts/CartContext';

function App() {



    return (
      <BrowserRouter>
        <CartProvider>
          <NavBar />
            <Routes>
              <Route path='/' element={ <ItemListContainer greeting={'Seleccione sus productos'} />} />
              <Route path='/category/:categoryId' element={ <ItemListContainer greeting={'Seleccione sus productos'} />} />
              <Route path='/item/:id' element={<ItemDetailContainer/>} />
              <Route path='/cart' element={<Cart/>} />
            </Routes>
        </CartProvider>
      </BrowserRouter>
  );

}

export default App;
