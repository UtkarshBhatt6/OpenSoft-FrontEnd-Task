import './Components/stylesheet.css'
import Home from './Components/Home'
import Chefs from './Components/Chefs'
import About from './Components/About'
import Footer from './Components/Footer'
import Menu from './Components/Menu'
import Food from './Components/Food'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar'

import AddToCartPage from './Components/AddToCartPage'
import Context from './context/Context'
import Cart from "./Components/Cart";
import { CartProvider } from "react-use-cart";
function Restaurant() {
    return (
        <Router>
            <div className="Restaurant">

                {/* <Navbar /> */}
                <div className="content">
                    <Switch>
                        <Route exact path='/'>
                             <Navbar />
                            <Home />
                            <About />
                            <Menu />
                            <Chefs />
                            <Footer />
                         </Route>

                        <Route exact path='/AddToCartPage'>
                            <AddToCartPage />
                        </Route>

                        <Route exact path='/AddToCart'>
                          <CartProvider>
                          <Food/>
                          <Cart/>
                          </CartProvider>
                        </Route>

                    </Switch>
                </div>

            </div>
        </Router>
    );
}
export default Restaurant;

{/* <img src="https://www.blueosa.com/wp-content/uploads/2020/07/butter-chicken-Chicken-Makhani.jpg" alt="Butter Chicken" height='250px' width='25%' />
<img src="https://www.blueosa.com/wp-content/uploads/2020/07/Indian-Cauliflower-Potatoe.jpg" alt="Potato and Cauliflower" height='250px' width='25%' />
<img src="https://www.blueosa.com/wp-content/uploads/2020/07/Matar-Paneer-Peas-and-Cooked-Cottage-Cheese.jpg" alt="Matar Paneer" height='250px' width='25%' />
<img src="https://www.blueosa.com/wp-content/uploads/2020/07/curried-meat-Indian-dshes.jpg" alt="Rogan Josh" height='250px' width='25%' /> */}