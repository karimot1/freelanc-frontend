import React from 'react'
import meta from "./images/meta.12b5e5c.png"
import google from "./images/google.61e78c8.png"
import netflix from "./images/netflix.96c5e3f.png"
import pandg from "./images/pandg.0f4cfc2.png"
import paypal  from "./images/paypal.305e264.png"
import graphic from "./image2/graphics-design.91dfe44.svg"
import onlinemar from "./image2/online-marketing.a3e9794.svg"
import writing from "./image2/writing-translation.a787f2f.svg"
import music from "./image2/music-audio.ede4c90.svg"
import video from "./image2/video-animation.1356999.svg"
import programming from "./image2/programming.6ee5a90.svg"
import business from "./image2/business.fabc3a7.svg"
import lifestyle from "./image2/lifestyle.112b348.svg"
import data from "./image2/data.855fe95.svg"
import photograp from  "./image2/photography.0cf5a3f.svg"
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import pro from "./image2/lohp-pro.webp";
import selling from "./image2/video.mp4";
import personalshake from "./image2/passionshake.jpeg";
import bruno from "./image2/bruno_malagrino.webp";
import eveeelin from "./image2/eveeelin.webp";
import fern from "./image2/fernandobengua.webp";
import lamon from "./image2/lamonastudio-img.webp";
import none from "./image2/noneyn.png";
import spickex from "./image2/spickex.jpeg";
import skydesigner from "./image2/skydesigner.webp"
import businessideas from "./image2/business ideas.webp"
import homebusiness from "./image2/home based online business-fiverr.webp"
import websitebuilder from "./image2/websitebuilders.webp"
import artile from "./image2/Article Cover.webp"
import businesslogo from "./image2/business logo design-fiverr guide.jpg"
import sidehustle from "./images/side hustle.webp"
import logopro from "./image2/logo_pro-removebg-preview.png";



const Navbar2 = ()=> {
  return (
    <>

<div className='navbar'>

<div className='navbarall'>

<div className='image'>
    <img src={logopro} alt="" />
  <Link className='link'>How it Works</Link>   
    <Link className='link'>Browser jobs</Link>
</div>

<div className='auth'>
    <button className='butt'>Login</button>
    <button className='butt'>Sign up</button>
    <button  className='post'>Post a project</button>
</div>

</div>

</div>
    
    {/* <div className='navbar2'>

    

      <div className='dropdown'>

        <div className='ddbutton'>
          <button className='find'>Find jobs</button>
          </div>

          <button className='hire'>Hire freelancers</button>
          
          <button className='find'>Get ideas</button>


          <button className='find'>About</button>
       

          <button className='find'>Resources</button>
      


    </div>

    </div> */}



    <div className='background1'>

          <div className="alltext">
        <div className='backhire'>
        <h1>Find the right freelance service, right away</h1>
          </div>  
     
          <div className='list'>
          <input type="text" placeholder='Search for any service' />
          <button><Icon icon="bitcoin-icons:search-outline" width="30px" height="30px"  style={{color: "white"}} /></button>
          </div>

          <div className="popular">
            <p>Popular:</p>
            <button>Website Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>Ai Service</button>
          </div>

            
          </div>
    </div>

    <div className="background2">
          
          <div className='back-logos'>
           <div className='back-asusedby'>
            <h1>Trusted by:</h1>
           </div>
           <div className='back-imagelogo'>

              <div>
                <img src={meta} alt="" width="70px" />
              </div>
              <div>
                <img src={google} alt="" width="50px" />
              </div>
              <div>
                <img src={netflix} alt="" width="60px" />
              </div>
              <div>
                <img src={pandg} alt="" width="40px" />
              </div>
              <div>
                <img src={paypal} alt="" width="60px" />
              </div>

              </div>

          </div>

          <div className='back-popular'>
          <div className='back2all'>
            <div>
              <h1>Popular services</h1>
            </div>
            <div className='back-withfree'>
           
              <div className='ai'>
              <p>Add talent to AI</p>
      <h1>AI Artists</h1>
              </div>
              <div className='logodesign'>
                <p>Build your brand</p>
                <h1>Login Design</h1>
              </div>
             
              <div className='social'>
                <p>Reach more customers</p>
                <h1>Social Media</h1>
              </div>
              <div className='seo'>
                <p>Unlock growth online</p>
                <h1>seo</h1>
              </div>
              <div className='illustration'>
                <p>Color your dream</p>
                <h1>Illustration</h1>
              </div>
              <div className='transistion'>
                <p>Go global</p>
                <h1>Translation</h1>
              </div>
              <div className='data-entry'>
              <p>Learn your business</p>
              <h1>Data Entry</h1>
              </div>
              <div className='book-cover'>
                <p>Showcase your story</p>
                <h1>Book Cover</h1>
              </div>
            </div>
            </div>
          </div>
    </div>

    <div className='background3'>


      <div className='text-listall'>
          
      <div className='back3-h1'>
        <h1>The best part? Everything.</h1>
      </div>
        <div className='texts-lists'>
          <div className='text-list'>
            <div className='d-flex flex-wrap'>
            <Icon icon="ri:checkbox-circle-line" width="30" height="48"  style={{color:"#7a7d85"}} />
              <h1>Stick to your budget</h1>
            </div>
            <p>Find the right service for every price point. No hourly rates, just project-based pricing</p>
          </div>

          <div className='text-list'>
          <div className='d-flex flex-wrap'>
          <Icon icon="ri:checkbox-circle-line" width="30" height="48"  style={{color:"#7a7d85"}} />
            <h1>Get quality work done quickly</h1>
          </div>
          <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
          </div>

          <div className='text-list'>
          <div className='d-flex flex-wrap'>
          <Icon icon="ri:checkbox-circle-line" width="30" height="48"  style={{color:"#7a7d85"}} />
            <h1>Pay when you're happy</h1>
          </div>
          <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
          </div>

          <div className='text-list'>
          <div className='d-flex flex-wrap'>
          <Icon icon="ri:checkbox-circle-line" width="30" height="48"  style={{color:"#7a7d85"}} />
            <h1>Count on 24/7 support</h1>
          </div>
          <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
          </div>

</div>

          <div className='back3-video'>
            <video autoPlay muted>
              <source src={selling}/>
            </video>
          </div>

      </div>

    </div>

    <div className='background4'>
      

          <div className='back4-texts'>

            <div className='back4-h1'>
              <h1>You need it, we've got it</h1>
            </div>

            <div className='back4-images'>

              <div className='back4-icons'>
                <div>
                  <img src={graphic} alt="" width="60px" height="35px" />
                </div>
                <p>Graphics & Design</p>
              </div>

              <div className='back4-icons'>
              <div>
                <img src= {onlinemar } alt="" width="60px" height="35px" />
              </div>
              <p>Digital Marketing</p>
              </div>

              <div className='back4-icons'>
              <div>
                <img src={writing} alt="" width="60px" height="35px" />
              </div>
              <p>Writing & Translation</p>
              </div>

              <div className='back4-icons'>
              <div>
                <img src={video} alt="" width="60px" height="35px" />
              </div>
              <p>Video & Animation</p>
              </div>

              <div className='back4-icons'>
              <div>
                <img src={music} alt=""  width="60px" height="35px"/>
              </div>
              <p>Music & Audio</p>
              </div>

              <div className='back4-icons'>
              <div>
                <img src={programming} alt="" width="60px" height="35px" />
              </div>
              <p>Programming & Tech</p>
              </div>

              <div className='back4-icons3'>
              <div>
                <img src={business} alt="" width="60px" height="35px"/>
              </div>
              <p>Business</p>
              </div>

              <div className='back4-icons3'>
              <div>
                <img src={lifestyle} alt="" width="60px" height="35px"/>
              </div>
              <p>Lifestyle</p>
              </div>

              <div className='back4-icons3'>
              <div>
                <img src={data} alt="" width="50px" height="25px" />
              </div>
              <p>Data</p>
              </div>

              <div className='back4-icons3'>
              <div>
                <img src={photograp} alt=""  width="60px" height="35px"/>
              </div>
              <p>Photography</p>
              </div>

            </div>

          </div>
    </div>

    <div className='background5'>
          <div className='back5-all'>
            <div className='back5alltext'>
              
              <div className='back5-text'>
                <h5>IndiePros</h5>
                <h1>We're here for your <br /> <b> e-Commerce </b>everything</h1>
              </div>
              <div className='back5-texts'>
                <h1>Get a project manager</h1>
                <p>to guide you through each stage of launching your e-Commerce business</p>
              </div>
              <div className='back5-texts'>
                <h1>Accelerate time-to-market</h1>
                <p>with a dedicated team of top-tier freelance experts</p>
              </div>
              <div className='back5-texts'>
                <h1>Optimize your budget</h1>
                <p>with a dedicated project manager who will handle all your tasks, leaving you more money for marketing and growth</p>
              </div>
              <div className='back5-texts'>
                <button>Get started</button>
              </div>
              
              </div>

              <div className='back5-images'>
                  <img src={pro} alt="" width="100%" height="400px" />
              </div>
          </div>
    </div>

    <div className='background7'>
    <div className='back7-texttitle'>
              <h1>Inspiring work made on IndiePros</h1>
              <button> See more 
              <Icon icon="iconamoon:arrow-right-2-thin" width="20" height="20"  style={{color:"#446ee7"}} />
                 </button>
            </div>
          <div className='back7all'>
         

              <div className='back7-images'>

                <div>
                  <img src={personalshake} alt="" />
                 
                    <h1>Product</h1>
                    <p> <span>Photographyby</span> passionshake</p>  
                </div>
                <div>
                  <img src={bruno} alt="" />
                  <p><span>Logo Designby </span> bruno_malagrino</p>
                </div>
                <div>
                  <img src={eveeelin} alt="" />
                  <p><span>Logo Designby</span> eveeelin</p>
                </div>
                <div>
                  <img src={fern} alt="" />
                  <h1>Social Media</h1>
                  <p><span>Designby</span> fernandobengua</p>
                </div>
                <div>
                  <img src={lamon} alt="" />
                  <p><span>Animated GIFsby</span> lamonastudio</p>
                </div>
                <div>
                  <img src={none} alt="" />
                  <h1>Portraits &</h1> 
                  <p><span>Caricaturesby</span> noneyn</p>
                </div>
                <div>
                  <img src={spickex} alt="" />
                    <p><span>Flyer Designby</span>spickex</p>
                </div>
                <div>
                  <img src={skydesigner} alt="" />
                 <h1> Web & Mobile</h1>
                  <p><span>Designby</span> skydesigner</p> 
                  
                </div>

              </div>  

          </div>
    </div>

    <div className='background8'>
    <div className='back8-texttitle'>
              <h1>Guides to help you grow</h1>
              <button>See more</button>
            </div>

            <div className='back8-images'>
              <div>
                <img src={sidehustle} alt="" />
                <p>Side a side business</p>
              </div>
              <div>
                <img src={businessideas} alt="" />
                <p>Ecommerces business ideas</p>
              </div>
              <div>
                <img src={homebusiness} alt="" />
                <p>Start an online business and work from home </p>
              </div>
              <div>
                <img src={websitebuilder} alt="" />
                <p>Build a website from scratch</p>
              </div>
              <div>
                <img src={artile} alt="" />
                <p>Grow your business with AI</p>
              </div>
              <div>
                <img src={businesslogo} alt="" />
                <p>Create a logo for yor business</p>
              </div>
            </div>
    </div>
    
    <div className='background9'>
        <div className='back9all'>
          <div className='back9-text'>
            <h1>Freelance services at your <br /><span>fingertips!</span></h1>
            <button>Join IndiePros</button>
          </div>
         
        </div>
    </div>

    <div className='background10'>
          <div className='back10all'>

            <div  className='back10-text'>

      <h1>Categories</h1>
      <p>Graphics & Design</p>
      <p>Digital Marketing</p>
      <p>Writing & Translation</p>
      <p>Video & Animation</p>
      <p>Music & Audio</p>
      <p>Fiverr Logo Maker</p>
      <p>Programming & Tech</p>
      <p>Data</p>
      <p>Business</p>
      <p>Lifestyle</p>
      <p>Photography</p>
      <p>End-to-End Projects</p>
      <p>Sitemap</p>
            </div>

            <div  className='back10-text'>
            <h1>About</h1>
            <p>Careers</p>
            <p>Press & News</p>
            <p>Partnerships</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Intellectual Property Claims</p>
            <p>Investor Relations</p>
            </div>

            <div className='back10-text'>
            <h1>Support and Education</h1>
            <p>Help & Support</p>
            <p>Trust & Safety</p>
            <p>Selling on Fiverr</p>
            <p>Buying on Fiverr</p>
            <p>Fiverr Guides</p>
            <p>Learn</p>
            <p>Online Courses</p>
            </div>

            <div className='back10-text' >
            <h1> Community</h1>
            <p>Customer Success Stories</p>
            <p>Community Hub</p>
            <p>Forum</p>
            <p>Events</p>
            <p>Blog</p>
            <p>Creators</p>
            <p>Affiliates</p>
            <p>Podcast</p>
            <p>Invite a Friend</p>
            <p>Become a Seller</p>
            <p>Community Standards</p>
            </div>

            <div  className='back10-text'>
            <h1> Business Solutions</h1>
            <p>About Business Solutions</p>
            <p>Fiverr Pro</p>
            <p>Fiverr Certified</p>
            <p>Become an Agency</p>
            <p>Fiverr Enterprise</p>
            <p>ClearVoice</p>
            <p>Content Marketing</p>

            <p>Working Not Working</p>
            <p>Contact Sales</p>
            </div>

          </div>

          <div className='back10-icon'>


            <div className='d-flex'>
            <h1>IndiePros<Icon icon="memory:circle" width="5" height="5"  style={{color: "black"}} /></h1>
            <p>© Fiverr International Ltd. 2024</p>

            </div>

            <div className='back10-but'>
              <button><Icon icon="ic:baseline-tiktok" width="25" height="20"  style={{color:"#898b92"}} /></button>
              <button><Icon icon="mdi:instagram" width="25" height="20"  style={{color:"#898b92"}} /></button>
              <button><Icon icon="mdi:linkedin" width="25" height="20"  style={{color: "#898b92"}} /></button>
              <button><Icon icon="mingcute:facebook-fill" width="25" height="20"  style={{color: "#898b92"}} /></button>
              <button><Icon icon="ri:twitter-x-fill" width="25" height="20"  style={{color:"#898b92"}} /></button>
              <div className='back10-button'>
              <button><Icon icon="material-symbols:language" width="25" height="20"  style={{color:"#898b92"}} /> English</button>
              <button><Icon icon="foundation:dollar" width="25" height="20"  style={{color:"#898b92"}} /> USD</button>
              </div>
             
            </div>
          </div>
    </div>

    </>
  )
}

export default Navbar2