const Navbar = () => {
    return ( 
        <div id='nav' className="navbar">

        <img src="https://wallpapercave.com/wp/wp11030601.jpg" alt="bollyWoodSpice" height='80px' />
        <h2>Bollywood Spice</h2>
       
        
        <ul className="navigation">
            <li><a href="/">Home</a></li>
            <li><a href="#2">About</a></li>
            <li><a href="/AddToCart">Menu</a></li>
            <li><a href="#4">Chefs</a></li>
            <li><a href="#5">Contact Us</a></li>
            <li><a href='./AddToCartPage'><ion-icon name="cart-outline" size='large'></ion-icon></a></li>

        </ul>
       
    </div>
     );
}
 
export default Navbar;