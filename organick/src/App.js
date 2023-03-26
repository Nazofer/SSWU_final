import './styles/global.scss';
import NavMenu from './components/sections/nav-menu/nav-menu';
// import Hero from './components/sections/hero/hero';
// import Ads from './components/sections/ads/ads';
// import About from './components/sections/about/about';
// import Testimonials from './components/sections/testimonials/testimonials';
// import Products from './components/sections/products/products';
// import Order from './components/sections/order-confirmation/order-confirmation';
// import ProductForm from './components/sections/products/products-modal/products-modal';
import Footer from './components/sections/footer/footer';
import MainBody from './pages/main/main';
import CartBody from './pages/cart/cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavMenu></NavMenu>
        <div className='Content'>
          <Routes>
            <Route exact path='/' element={<MainBody />} />
            <Route
              exact
              path='/cart'
              element={
                <CartBody name='Health Pistachios' discount='7' price='20' />
              }
            />
            {/* <Route path="*" element={<NotFound/>}/>   */}
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
