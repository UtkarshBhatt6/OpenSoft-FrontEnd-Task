import MakeReservation from "./MakeReservation";
const Footer = () => {
    return ( 
        <div id='5' className="footer">
                <h1>Contacts</h1>

                <div id='socialMedia' className="socialMedia">
                    <div id='youtube' className="socialMediaLinks">
                        <a href="https://www.youtube.com"> <ion-icon name="logo-youtube" size='large'></ion-icon></a>

                    </div>
                    <div id='instagram' className="socialMediaLinks">
                        <ion-icon name="logo-instagram" size='large'></ion-icon>
                    </div>
                    <div id='whatsapp' className="socialMediaLinks">
                        <ion-icon name="logo-whatsapp" size='large'></ion-icon>

                    </div>
                    <div id='linkedin' className="socialMediaLinks">
                        <ion-icon name="logo-linkedin" size='large'></ion-icon>

                    </div>
                    <div id='facebook' className="socialMediaLinks">
                        <ion-icon name="logo-facebook" size='large'></ion-icon>
                    </div>
                    <div id='twitter' className="socialMediaLinks">
                        <ion-icon name="logo-twitter" size='large'></ion-icon>
                    </div>
                  
                </div>
                <div className="makeReservation">
                    <MakeReservation/>
                </div>
                <div className="final">
                    <img src="https://wallpapercave.com/wp/wp11030601.jpg" alt="bollyWoodSpice" height='200px' width='300px' />
                    <h2 id='name'>BOLLYWOOD SPICE <br></br>SINCE:  1900</h2>
                </div>
            </div>
     );
}
 
export default Footer;