import emailLogo from '../component/asset/email.svg';
import phoneLogo from '../component/asset/phone.svg';
import whatsApp from '../component/asset/whatsapp-color.svg';
import fbLogo from '../component/asset/facebook.svg';
import instagramLogo from '../component/asset/instagram.svg';
import twitterLogo from '../component/asset/twitter-round.svg';
import youTubeLogo from '../component/asset/youtube-you.svg';
const Footer = ()=> {
    return (
        <>
            <footer>
                <section  className="flex">
                    <div  className="flex">
                        <div className="flex">
                            <img src={emailLogo} alt="" />
                            <div>
                                <h3>EMAIL SUPPORT </h3>
                                <p>help@paul.com </p>
                            </div>
                        </div>
                        <div className="flex">
                            <img src={phoneLogo} alt="" />
                            <div>
                                <h3>PHONE SUPPORT </h3>
                                <p>081567547522 </p>
                            </div>
                        </div>
                        <div className="flex">
                            <img src={whatsApp} alt="" />
                            <div>
                                <h3>WHATSAPP SUPPORT </h3>
                                <p>0956575754275 </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <input type="email" placeholder='Email Address' /><button> Suscribe</button>
                    </div>
                </section>

                <section className='flex'>
                    <div className='flex'>
                        <div>
                            <h3>ABOUT PAUL</h3>
                            <p>Contact Us</p>
                            <p>About Us</p>
                            <p>Careers </p>
                            <p>Our Blog</p>
                            <p>Forum</p>
                            <p>Terms & Condition</p>
                        </div>
                        <div>
                            <h3>PAYMENT</h3>
                            <p>Wallet</p>
                            <p>Paul pay</p>
                            <p>Verve </p>
                            <p>MasterCard</p>
                            <p>Visa</p>
                            <p>Bulk Purchase</p>
                        </div>
                        <div>
                            <h3>BUYING  </h3>
                            <p>Contact Us</p>
                            <p>Buyer Safety</p>
                            <p>FAQs</p>
                            <p>Deliverys </p>
                            <p>Digital Services</p>
                            <p>Bulk Purchase</p>
                        </div>
                        <div>
                            <h3>MORE INFO</h3>
                            <p>Site Map</p>
                            <p>Track My Order</p>
                            <p> Private Policy </p>
                            <p>Our Blog</p>
                            <p>Items Policy</p>
                            <p>Terms & Condition</p>
                        </div>
                    </div>
                    <div>
                        <h3>DOWNLOAD & CONNECT WITH US</h3>
                        <div>
                            <div>

                            </div>
                            <div>

                            </div>
                        </div>
                        <h3>CONNECT WITH US </h3>
                        <img src={fbLogo} alt="" />
                        <img src={instagramLogo} alt="" />
                        <img src={twitterLogo} alt="" />
                        <img src={youTubeLogo} alt="" />

                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer;





