import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSpring, animated } from 'react-spring';
import { Form, Button, Container } from 'react-bootstrap';
import { FaShoppingCart, FaArrowUp, FaTrashAlt, FaTimes } from 'react-icons/fa';
import {  Row, Col } from 'react-bootstrap';


import img1 from './images/carosal1.jpeg';
import img2 from './images/carosall.jpeg';
import img3 from './images/carosal4.jpeg';
import s1 from './images/product1 (5).JPEG';
import s2 from './images/product1 (6).JPEG';
import s3 from './images/product1 (2).JPEG';
import s4 from './images/product1 (7).JPEG';
import s5 from './images/product1 (8).JPEG';
import s6 from './images/product1 (1).JPEG';
import fb1 from './images/Fridge-Banne.jpeg';
import f1 from './images/LG FRIDGE .JPEG';
import f2 from './images/LG FRIDGE DOBLE DOOR.JPEG';
import f3 from './images/goderj fridge.JPEG';
import f4 from './images/goderj fridge single door.jpeg';
import f5 from './images/samsung fridge1.jpeg';
import f6 from './images/whirlpool fridge.jpeg';
import f7 from './images/whirlpool fridge1.jpeg';
import f8 from './images/samsung fridgee.jpeg';
import wb1 from './images/washing machine banner.jpeg';
import w1 from './images/HAIER WASHING MACHINE FRONT LOAD.JPEG';
import w2 from './images/HAIER WASHING MACHINE TOP LOAD.JPEG';
import w3 from './images/LG WASHING MACHING.JPEG';
import w4 from './images/LG WASHING MACHING  TOP LOAD 1.JPEG';
import w5 from './images/SAMSUNG WASHING MACHINE FRONT LOAD.JPEG';
import w6 from './images/SAMSUNG WASHING MACHINE TOP LOAD.JPEG';
import w7 from './images/WHIRLPOOL WASHING MACHINE FRONT LOAD.JPEG';
import w8 from './images/WHIRLPOOL WASHING MACHINE TOP LOAD.JPEG';
import mb1 from './images/mobile banner.jpeg';
import m1 from './images/mobile1.jpeg';
import m2 from './images/mobile2.jpeg';
import m3 from './images/mobile3.jpeg';
import m4 from './images/mobile4.jpeg';
import m5 from './images/mobile5.jpeg';
import m6 from './images/mobile6.jpeg';
import m7 from './images/mobile7.jpeg';
import m8 from './images/mobile8.jpeg';
import tb1 from './images/television banner.jpeg';
import t1 from './images/HAIER TV 43 .JPEG';
import t2 from './images/PANASONIC 32.JPEG';
import t3 from './images/LG TV 55 .JPEG';
import t4 from './images/SAMSUNG TV 43.JPEG';
import t5 from './images/SONY TV 32.JPEG';
import t6 from './images/PANASONIC 43.JPEG';
import t7 from './images/HAIER TV 55 .JPEG';
import t8 from './images/LG TV 32 .JPEG';
import ab1 from './images/ac banner.jpeg';
import a1 from './images/ac image1.jpeg';
import a2 from './images/ac image2.jpeg';
import a3 from './images/ac image3.jpeg';
import a4 from './images/ac image4.jpeg';
import a5 from './images/ac image5.jpeg';
import a6 from './images/ac image6.jpeg';
import a7 from './images/ac image7.jpeg';
import a8 from './images/ac image8.jpeg';
import hb1 from './images/speaker banner.jpeg';
import h1 from './images/speaker1.jpeg';
import h2 from './images/speaker2.jpeg';
import h3 from './images/speaker3.jpeg';
import h4 from './images/speaker4.jpeg';
import h5 from './images/speaker5.jpeg';
import h6 from './images/speaker6.jpeg';
import h7 from './images/speaker7.jpeg';
import h8 from './images/speaker8.jpeg';
import cb1 from './images/contactbanner.jpeg';
import ab from './images/about banner.jpeg';
import fs from './images/footer small.jpeg';


const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const products = [
    { id: 1, image: f1, title: 'LG', description: 'Single Door Fridge (High-quality product).', price: 37299.99 },
    { id: 2, image: f2, title: 'Bosch ', description: ' Double Door Fridge (Affordable and reliable).', price: 66199.99 },
    { id: 3, image: f3, title: 'Godrej', description: 'Single Door Fridge (Top-rated product).', price: 42249.99 },
    { id: 4, image: f4, title: 'Haier', description: 'Single Door Fridge  (Durable and stylish).', price: 35189.99 },
    { id: 5, image: f5, title: 'Samsung ', description: 'Double Door Fridge ( value for money).', price: 45179.99 },
    { id: 6, image: f6, title: 'Whirlpool ', description: 'Double Door Fridge (Premium quality).', price: 38299.99 },
    { id: 7, image: f7, title: 'Panasonic', description: 'Double Door Fridge (High-quality product).', price:  49179.99 },
    { id: 8, image: f8, title: 'Samsung', description: 'Single Door Fridge (Premium quality).', price: 32299.99 },
  ];

  const washingMachines = [
    { id: 9, image: w1, title: 'Samsung', description: 'Front-Load (9KG) Fully Automatic Washing Machine.', price: 51399.99 },
    { id: 10, image: w2, title: 'Whirlpool ', description: 'Top-Load (7.5KG) Fully Automatic  Washing Machine .', price: 29299.99 },
    { id: 11, image: w3, title: 'LG', description: 'Front-Load (9.5KG) Fully Automatic  Washing Machine.', price: 49249.99 },
    { id: 12, image: w4, title: 'Samsung', description: 'Top-Load (7.5KG) Fully Automatic  Washing Machine.', price: 19399.99 },
    { id: 13, image: w5, title: 'Godrej ', description: 'Front-Load (6KG) Fully Automatic  Washing Machine.', price: 22799.99 },
    { id: 14, image: w6, title: 'Panasonic', description: 'Top-Load (7.5KG) Fully Automatic  Washing Machine.', price: 19799.99 },
    { id: 15, image: w7, title: 'Whirlpool ', description: 'Front-Load (6KG) Fully Automatic  Washing Machine.', price: 24999.99 },
    { id: 16, image: w8, title: 'Bosch ', description: 'Front-Load (9KG) Fully Automatic  Washing Machine.', price: 36900.99 },
  ];

  const mobilephones = [
    { id: 17, image: m1, title: 'Vivo', description: '(Y200 5G) Black Diamond 6/128 GB.', price: 19399.99 },
    { id: 18, image: m2, title: 'Realme', description: '(12+5G) Woodland Green 8/128 GB.', price: 16299.99 },
    { id: 19, image: m3, title: 'Redmi', description: '(Note 13 5G) Stealth Black  8/256 GB.', price: 14499.99 },
    { id: 20, image: m4, title: 'OnePlus', description: '(Nord CE 3 Lite 5G) Chromatic Gray 4/128 GB.', price: 17359.99 },
    { id: 21, image: m5, title: 'Vivo ', description:  '(Y28s 5G) Vintage Red 8/128 GB.', price: 16399.99 },
    { id: 22, image: m6, title: 'OPPO', description:  '(Reno 12 Pro 5G) Space Brown 12/256 GB.', price: 36299.99 },
    { id: 23, image: m7, title: 'Vivo ', description: ' (Y200 5G) Darky Bluess 8/128 GB.', price: 22249.99 },
    { id: 24, image: m8, title: 'Apple Iphone ', description:   '(13 5G) Vintage Green 512 GB.', price: 68359.99 },
  ];
const Television = [
    { id: 25, image: t1, title: 'Haier', description: '(43 inch) HD Ready LED Smart Google TV.', price: 23399.99 },
    { id: 26, image: t2, title: 'Panasonic', description: '(55 inch) Ultra HD (4K) LED Smart Google TV. ', price: 20299.99 },
    { id: 27, image: t3, title: 'Redmi', description: '(32 inch) Ultra HD (4K) LED Smart Google TV.', price: 21249.99 },
    { id: 28, image: t4, title: 'Infinix', description: '(43 inch) HD Ready LED Smart Google TV.', price: 16359.99 },
    { id: 29, image: t5, title: 'Sony ', description:'(43 inch) Ultra HD (4K) LED Smart Google TV.', price: 39399.99 },
    { id: 30, image: t6, title: 'LG ', description: '(32 inch) Ultra HD (4K) LED Smart Google TV..', price: 14299.99 },
    { id: 31, image: t7, title: 'Haier ', description: '(65 inch) HD Ready LED Smart Google TV.', price: 66249.99 },
    { id: 32, image: t8, title: 'VU GLoLED', description:'(43 inch) Ultra HD (4K) LED Smart Google TV', price: 25359.99 },
  ];
const airconditioner = [
    { id: 33, image: a1, title: 'Blue Star (2024) Model', description: '(1.5 Ton) (5 Star Split inventer AC)-"White color".', price: 42399.99 },
    { id: 34, image: a2, title: 'Daikin (2024) Model', description: '(1.5 Ton) (5 Star Split inventer AC)-"White color".', price: 45299.99 },
    { id: 35, image: a3, title: 'Blue Star (2024) Model', description: ' (5 Star Split centralized inventer AC)-"White color.', price: 65249.99 },
    { id: 36, image: a4, title: 'LG (2024) Model', description: '(1-Ton) (5 Star Split inventer AC)-"White color" (6 In 1) Process.', price: 35359.99 },
    { id: 37, image: a5, title: 'Panasonic (2024) Model ', description: '(1.5 Ton) (5 Star Split inventer AC)-"White color".', price: 39399.99 },
    { id: 38, image: a6, title: 'Bajaj (2024) New Model ', description: '(65L) (5 Star Desert Air Cooler)-"White color', price: 12299.99 },
    { id: 39, image: a7, title: 'Crompton (2024) New Model ', description: '(25L) (5 Star Tower Air Cooler)-"White color".', price: 10249.99 },
    { id: 40, image: a8, title: 'Voltas(2024) New Model ', description:'(85L) (5 Star Desert Air Cooler)-"Black color".', price: 19359.99 },
  ];
  const hometheatre = [
    { id: 41, image: h1, title: 'Zebronics', description: '(ZEB-JOLT Trolley DJ ) (Bluetooth Party Speaker).', price: 10399.99 },
    { id: 42, image: h2, title: 'Boat', description: '(BOAT-JOLT ) (Bluetooth Party Speaker).', price:6299.99 },
    { id: 43, image: h3, title: 'Zebronics', description: '(ZEB-MONSTER  Trolley DJ) (Bluetooth Party Speaker).', price: 249.99 },
    { id: 44, image: h4, title: 'Boat', description: 'BOAT-RICH BASS (5Hrs) Playbacktime.', price: 4359.99 },
    { id: 45, image: h5, title: 'Boat ', description: 'Aavante Bar (A1040) w/Atteactive Design.', price: 4399.99 },
    { id: 46, image: h6, title: 'Jbl ', description: 'JBL-RICH MONSTER (5Hrs) Playbacktime.', price: 7299.99 },
    { id: 47, image: h7, title: 'Target ', description: '(5.1)Speakers With Subwoofer.', price: 8999.99 },
    { id: 48, image: h8, title: 'Sony', description:'(SONY-JOLT ) (Bluetooth Party Speaker).', price: 12359.99 },
  ];
  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const getVisibleProducts = (category) => {
    const start = activeIndex * 4;
    return category.slice(start, start + 4);
  };

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const updateQuantity = (id, type) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: type === 'increase' ? item.quantity + 1 : item.quantity - 1 } : item));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const scrollToBottomImage1 = () => {
    const bottomImage = document.getElementById('bottom-image1');
    bottomImage.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToBottomImage2 = () => {
    const bottomImage = document.getElementById('bottom-image2');
    bottomImage.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToBottomImage3 = () => {
    const bottomImage = document.getElementById('bottom-image3');
    bottomImage.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToBottomImage4 = () => {
    const bottomImage = document.getElementById('bottom-image4');
    bottomImage.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToBottomImage5 = () => {
    const bottomImage = document.getElementById('bottom-image5');
    bottomImage.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToBottomImage6 = () => {
    const bottomImage = document.getElementById('bottom-image6');
    bottomImage.scrollIntoView({ behavior: 'smooth' });
  };
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

 //CONTACT FORM

   const [formData, setFormData] = useState({
    name: '',
     email: '',
     message: ''
   });
   
   const [submitted, setSubmitted] = useState(false);
 
   // Handling form input changes
   const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData({
       ...formData,
       [name]: value
     });
   };
 
   // Form submission logic
   const handleSubmit = (e) => {
     e.preventDefault();
     console.log('Form submitted:', formData);
     setSubmitted(true);
   };
 
   // Animations
   const fadeIn = useSpring({
     opacity: 1,
     from: { opacity: 0 },
     config: { duration: 1000 }
   });
 
   const successMessage = submitted ? (
     <div className="alert alert-success mt-3" role="alert">
       Your message has been sent successfully!
     </div>
   ) : null;
  
  //  footer 
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    alert(`Subscribed with ${email}`);
  };
  
// Add this inside the form tag in your JSX
<form onSubmit={handleSubmit}></form>
  // Auto Slide Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % Math.ceil(products.length / 4));
    }, 40000); // Change the interval time (in ms) as desired

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [products.length, washingMachines.length,mobilephones.lenth]);

  return (
    <div>
      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

  {/* about */}
  <div id='ab'>
     <br></br>   <center><h4 style={{fontWeight:"bolder",fontFamily:"-moz-initial",fontSize:'35px'}}><u>ABOUT-US</u></h4></center>
      </div>
      <div className="container-fluid">
      <div className="row">
        {/* Left side - Image */}
        <div className="col-md-6 left-side">
          <img
            src={ab}
            alt="Home Appliances"
            className="img-fluid"
          />
        </div>

        {/* Right side - Content */}
        <div className="col-md-6 right-side">
          <h2 style={{fontWeight:'bolder',fontFamily:'cursive'}} >Welcome to Home Appliances World!</h2>
          <p style={{fontWeight:'bolder',fontFamily:'cursive',fontSize:'20px',color:'black',flexWrap:'wrap'}}>
            Discover a wide range of home appliances that bring convenience and comfort to your home.
            Whether you're looking for kitchen gadgets, cleaning tools, or entertainment devices, we have it all.
          </p>
          <ul style={{ listStyleType: "disc",flexWrap:'wrap' }} >
          <li style={{fontWeight:'bolder', paddingLeft: '10px',fontSize:'20px',fontFamily:'cursive'}}> Best brands in home appliances</li>
            <li style={{fontWeight:'bolder', paddingLeft: '10px',fontSize:'20px',fontFamily:'cursive'}}> Modern kitchen appliances</li>
            <li style={{fontWeight:'bolder', paddingLeft: '10px',fontSize:'20px',fontFamily:'cursive'}}>Energy-efficient products</li>
            <li style={{fontWeight:'bolder', paddingLeft: '10px',fontSize:'20px',fontFamily:'cursive'}}>Smart home devices</li> 
          </ul>
        <button className="btn btn-warning" block style={{fontWeight:'bolder',fontFamily:'cursive',fontSize:'20px',}} >Shop Now</button> 
        </div>
      </div>
    </div>


{/* Navigation Links */}
<div id='product'>
     <br></br>   <center><h4 style={{fontWeight:"bolder",fontFamily:"-moz-initial"}}>#CLICK HERE!<br></br> !CHOOSE YOUR FAVORITE PRODUCTS! </h4></center>
      </div>
<div>
        <br /><br />
        <Nav style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Nav.Link onClick={scrollToBottomImage1} style={{ marginRight: '10px', marginBottom: '10px', backgroundColor: 'black', borderRadius: '10px' }}>
            <img src={s4} alt='' style={{ width: '110%', height: 'auto', maxWidth: '135px', objectFit: 'cover', borderRadius: '10px' }} />
          </Nav.Link>
          <Nav.Link onClick={scrollToBottomImage2} style={{ marginRight: '10px', marginBottom: '10px', backgroundColor: 'black', borderRadius: '10px' }}>
            <img src={s2} alt='' style={{ width: '110%', height: 'auto', maxWidth: '135px', objectFit: 'cover', borderRadius: '10px' }} />
          </Nav.Link>
          <Nav.Link onClick={scrollToBottomImage3} style={{ marginRight: '10px', marginBottom: '10px', backgroundColor: 'black', borderRadius: '10px' }}>
            <img src={s3} alt='' style={{ width: '110%', height: 'auto', maxWidth: '135px', objectFit: 'cover', borderRadius: '10px' }} />
          </Nav.Link>
          <Nav.Link onClick={scrollToBottomImage4} style={{ marginRight: '10px', marginBottom: '10px', backgroundColor: 'black', borderRadius: '10px' }}>
            <img src={s1} alt='' style={{ width: '110%', height: 'auto', maxWidth: '135px', objectFit: 'cover', borderRadius: '10px' }} />
       
          </Nav.Link>
          <Nav.Link onClick={scrollToBottomImage5} style={{ marginRight: '10px', marginBottom: '10px', backgroundColor: 'black', borderRadius: '10px' }}>
            <img src={s5} alt='' style={{ width: '110%', height: 'auto', maxWidth: '135px', objectFit: 'cover', borderRadius: '10px' }} />
          </Nav.Link>
          <Nav.Link onClick={scrollToBottomImage6} style={{ marginRight: '10px', marginBottom: '10px', backgroundColor: 'black', borderRadius: '10px' }}>
            <img src={s6} alt='' style={{ width: '110%', height: 'auto', maxWidth: '135px', objectFit: 'cover', borderRadius: '10px' }} />
          </Nav.Link>
        </Nav>
      </div>
      {/* Up Arrow Button */}
      <div onClick={scrollToTop} style={{
        position: 'fixed',
        bottom: '70px',
        right: '20px',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '50%',
        padding: '10px',
        cursor: 'pointer',
        zIndex: 999,
      }}>
        <FaArrowUp size={24} />
      </div>
      {/* Cart Icon with Number of Items */}
      <div onClick={toggleCartVisibility} style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: 'black',
        color: 'white',
        padding: '10px',
        borderRadius: '50%',
        cursor: 'pointer',
        zIndex: 998,
      }}>
        <FaShoppingCart size={24} />
        {cart.length > 0 && (
          <span style={{
            position: 'absolute',
            top: '0',
            right: '0',
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '50%',
            padding: '2px 6px',
            fontSize: '12px',
            fontWeight: 'bold',
          }}>
            {cart.length}
          </span>
        )}
      </div>

      {/* Shopping Cart with Close Icon */}
      {cartVisible && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: '500px',
          backgroundColor: 'white',
          padding: '20px',
          boxShadow: '-4px 4px 10px rgba(0, 0, 0, 0.2)',
          height: 'auto',
          overflowY: 'auto',
          zIndex: 9999,
          transition: 'transform 0.3s ease-in-out',
        }}>
          <div style={{ textAlign: 'right' }}>
            <FaTimes onClick={toggleCartVisibility} size={24} style={{ cursor: 'pointer', color: 'black' }} />
          </div>
          <h2>Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <img src={item.image} alt={item.title} style={{ width: '50px', height: 'auto', objectFit: 'cover' }} />
                  <div style={{ flex: '1', marginLeft: '10px' }}>
                    <p>{item.title}</p>
                    <p>{item.quantity} x ₹{item.price.toFixed(2)}</p>
                  </div>
                  <div>
                    <button onClick={() => updateQuantity(item.id, 'decrease')} style={{ marginRight: '5px' }}>-</button>
                    <button onClick={() => updateQuantity(item.id, 'increase')}>+</button>
                    <button onClick={() => removeFromCart(item.id)} style={{ color: 'red', marginLeft: '5px' }}><FaTrashAlt /></button>
                  </div>
                </div>
              ))}
              <hr />
              <div style={{ fontWeight: 'bold', textAlign: 'right' }}>Total: ₹{totalAmount}</div>
            </div>
          )}
        </div>
      )}

    
  {/* television Category */}

      <div id='bottom-image1'>
     <br></br>   <center><h4  style={{fontWeight:"bolder",fontFamily:"-moz-initial",fontSize:'35px'}}><u>TELEVISION-WORLD</u></h4></center>
      </div>
      <div>
     <br></br>   <img src={tb1} alt='' style={{ width: '100%', objectFit: 'cover' }} />
      </div>

      {/* Product Pagination for Refrigerators */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <div style={{ display: 'inline-block', textAlign: 'center' }}>
          {Array.from({ length: Math.ceil(products.length / 4) }, (_, index) => (
            <span
              key={index}
              onClick={() => handleDotClick(index)}
              style={{
                cursor: 'pointer',
                padding: '2px 8px',
                margin: '0 5px',
                borderRadius: '50%',
                backgroundColor: index === activeIndex ? 'black' : '#ddd',
                color: index === activeIndex ? 'white' : 'black',
              }}
            ></span>
          ))}
        </div>
      </div>

      {/* Product Cards for Refrigerators */}

      <div style={{ display: 'flex', fontWeight: 'bolder', fontFamily: 'cursive', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
        {getVisibleProducts(Television).map((product) => (
          <div key={product.id} style={{
            width: '230px',
            height: '450px',
            margin: '10px',
            backgroundColor: 'black',
             color:'white',
            borderRadius: '15px',
            // borderColor:'black',
            overflow: 'hidden',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            padding: '10px',
          
          }}>
            <img src={product.image} alt={product.title} style={{
              width: '100%',
              height: '50%',
              objectFit: 'cover',
              marginBottom: '10px',
            
            }} />
            <h4 style={{ fontFamily: 'cursive',fontWeight:'bold' }}>{product.title}</h4>
            <p>{product.description}</p>
            <p>₹{product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)} style={{
              backgroundColor: "yellow",
              color: 'black',
              padding: '10px',
              border: 'none',
              borderRadius: '10px',
              fontWeight:'bolder',
              cursor: 'pointer',
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    

      
      {/* Washing Machines Section */}
      <div id='bottom-image2'>
   <br></br>    <br></br> <center><h4 style={{fontWeight:"bolder",fontFamily:"-moz-initial",fontSize:'35px'}}><u>WASHING-MACHINES</u></h4></center>
      </div>
      <div>
     <br></br>   <img src={wb1} alt='' style={{ width: '100%', objectFit: 'cover' }} />
      </div>

      {/* Product Pagination for Washing Machines */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <div style={{ display: 'inline-block', textAlign: 'center' }}>
          {Array.from({ length: Math.ceil(washingMachines.length / 4) }, (_, index) => (
            <span
              key={index}
              onClick={() => handleDotClick(index)}
              style={{
                cursor: 'pointer',
                padding: '2px 8px',
                margin: '0 5px',
                borderRadius: '50%',
                backgroundColor: index === activeIndex ? 'black' : '#ddd',
                color: index === activeIndex ? 'white' : 'black',
              }}
            ></span>
          ))}
        </div>
      </div>

      {/* Product Cards for Washing Machines */}
      <div style={{ display: 'flex', fontWeight: 'bold', fontFamily: 'cursive', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
        {getVisibleProducts(washingMachines).map((product) => (
          <div key={product.id} style={{
            width: '230px',
            height: '450px',
            margin: '10px',
            // backgroundColor: 'lightgray',
                        backgroundColor: 'black',
             color:'white',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            padding: '10px',
          }}>
            <img src={product.image} alt={product.title} style={{
              width: '100%',
              height: '50%',
              objectFit: 'cover',
              marginBottom: '10px',
            }} />
            <h4 style={{  fontFamily: 'cursive',fontWeight:'bold'}}>{product.title}</h4>
            <p>{product.description}</p>
            <p>₹{product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)} style={{
            backgroundColor: "yellow",
            color: 'black',
            padding: '10px',
            border: 'none',
            borderRadius: '10px',
            fontWeight:'bolder',
              cursor: 'pointer',
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

        {/* MOBILEPHONES Section */}
        <div id='bottom-image3'>
    <br></br> <br></br>   <center><h4 style={{fontWeight:"bolder",fontFamily:"-moz-initial",fontSize:'35px'}}><u>MOBILE-PHONES</u></h4></center>
      </div>
      <div>
      <br></br>  <img src={mb1} alt='' style={{ width: '100%', objectFit: 'cover' }} />
      </div>

      {/* Product Pagination for Washing Machines */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <div style={{ display: 'inline-block', textAlign: 'center' }}>
          {Array.from({ length: Math.ceil(washingMachines.length / 4) }, (_, index) => (
            <span
              key={index}
              onClick={() => handleDotClick(index)}
              style={{
                cursor: 'pointer',
                padding: '2px 8px',
                margin: '0 5px',
                borderRadius: '50%',
                backgroundColor: index === activeIndex ? 'black' : '#ddd',
                color: index === activeIndex ? 'white' : 'black',
              }}
            ></span>
          ))}
        </div>
      </div>

      {/* Product Cards for Washing Machines */}
      <div style={{ display: 'flex', fontWeight: 'bold', fontFamily: 'cursive', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
        {getVisibleProducts(mobilephones).map((product) => (
          <div key={product.id} style={{
            width: '230px',
            height: '450px',
            margin: '10px',
            // backgroundColor: 'lightgray',
                        backgroundColor: 'black',
             color:'white',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            padding: '10px',
          }}>
            <img src={product.image} alt={product.title} style={{
              width: '100%',
              height: '50%',
              objectFit: 'cover',
              marginBottom: '10px',
            }} />
            <h4 style={{ fontFamily: 'cursive',fontWeight:'bold' }}>{product.title}</h4>
            <p>{product.description}</p>
            <p>₹{product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)} style={{
              backgroundColor: "yellow",
              color: 'black',
              padding: '10px',
              border: 'none',
              borderRadius: '10px',
              fontWeight:'bolder',
              cursor: 'pointer',
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

 {/* Refrigerator Category */}
      <div id='bottom-image4'>
  <br></br>  <br></br>    <center> <h4 style={{fontWeight:"bolder",fontFamily:"-moz-initial",fontSize:'35px'}}><u>REFRIGERATORS</u></h4></center>
      </div>
      <div>
    <br></br>    <img src={fb1} alt='' style={{ width: '100%', objectFit: 'cover' }} />
      </div>

      {/* Product Pagination for Refrigerators */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <div style={{ display: 'inline-block', textAlign: 'center' }}>
          {Array.from({ length: Math.ceil(products.length / 4) }, (_, index) => (
            <span
              key={index}
              onClick={() => handleDotClick(index)}
              style={{
                cursor: 'pointer',
                padding: '2px 8px',
                margin: '0 5px',
                borderRadius: '50%',
                backgroundColor: index === activeIndex ? 'black' : '#ddd',
                color: index === activeIndex ? 'white' : 'black',
              }}
            ></span>
          ))}
        </div>
      </div>

      {/* Product Cards for Refrigerators */}
      <div style={{ display: 'flex', fontWeight: 'bold', fontFamily: 'cursive', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
        {getVisibleProducts(products).map((product) => (
          <div key={product.id} style={{
            width: '230px',
            height: '450px',
            margin: '10px',
            // backgroundColor: 'lightgray',
                        backgroundColor: 'black',
             color:'white',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            padding: '10px',
          }}>
            <img src={product.image} alt={product.title} style={{
              width: '100%',
              height: '50%',
              objectFit: 'cover',
              marginBottom: '10px',
            }} />
            <h4 style={{ fontFamily: 'cursive',fontWeight:'bold' }}>{product.title}</h4>
            <p>{product.description}</p>
            <p>₹{product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)} style={{
               backgroundColor: "yellow",
               color: 'black',
               padding: '10px',
               border: 'none',
               borderRadius: '10px',
               fontWeight:'bolder',
              cursor: 'pointer',
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

{/* AC Category */}
      <div id='bottom-image5'>
 <br></br> <br></br>      <center><h4 style={{fontWeight:"bolder",fontFamily:"-moz-initial",fontSize:'35px'}}><u>AIR-CONDITIONER</u></h4></center>
      </div>
      <div>
  <br></br>      <img src={ab1} alt='' style={{ width: '100%', objectFit: 'cover' }} />
      </div>

      {/* Product Pagination for Refrigerators */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <div style={{ display: 'inline-block', textAlign: 'center' }}>
          {Array.from({ length: Math.ceil(products.length / 4) }, (_, index) => (
            <span
              key={index}
              onClick={() => handleDotClick(index)}
              style={{
                cursor: 'pointer',
                padding: '2px 8px',
                margin: '0 5px',
                borderRadius: '50%',
                backgroundColor: index === activeIndex ? 'black' : '#ddd',
                color: index === activeIndex ? 'white' : 'black',
              }}
            ></span>
          ))}
        </div>
      </div>

      {/* Product Cards for Refrigerators */}
      <div style={{ display: 'flex', fontWeight: 'bold', fontFamily: 'cursive', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
        {getVisibleProducts(airconditioner).map((product) => (
          <div key={product.id} style={{
            width: '250px',
            height: '490px',
            margin: '10px',
            // backgroundColor: 'lightgray',
                        backgroundColor: 'black',
             color:'white',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            padding: '10px',
          }}>
            <img src={product.image} alt={product.title} style={{
              width: '100%',
              height: '50%',
              objectFit: 'cover',
              marginBottom: '10px',
            }} />
            <h4 style={{ fontFamily: 'cursive',fontWeight:'bold'}}>{product.title}</h4>
            <p>{product.description}</p>
            <p>₹{product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)} style={{
               backgroundColor: "yellow",
               color: 'black',
               padding: '10px',
               border: 'none',
               borderRadius: '10px',
               fontWeight:'bolder',
              cursor: 'pointer',
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

 {/* hometheatre Category */}
      <div id='bottom-image6'>
<br></br>     <br></br>   <center><h4 style={{fontWeight:"bolder",fontFamily:"-moz-initial",fontSize:'35px'}}><u>SOUND-SYSTEMS</u></h4></center>
      </div>
      <div>
      <br></br>  <img src={hb1} alt='' style={{ width: '100%', objectFit: 'cover' }} />
      </div>

      {/* Product Pagination for Refrigerators */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <div style={{ display: 'inline-block', textAlign: 'center' }}>
          {Array.from({ length: Math.ceil(products.length / 4) }, (_, index) => (
            <span
              key={index}
              onClick={() => handleDotClick(index)}
              style={{
                cursor: 'pointer',
                padding: '2px 8px',
                margin: '0 5px',
                borderRadius: '50%',
                backgroundColor: index === activeIndex ? 'black' : '#ddd',
                color: index === activeIndex ? 'white' : 'black',
              }}
            ></span>
          ))}
        </div>
      </div>

      {/* Product Cards for Refrigerators */}
      <div style={{ display: 'flex', fontWeight: 'bold', fontFamily: 'cursive', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
        {getVisibleProducts(hometheatre).map((product) => (
          <div key={product.id} style={{
            width: '250px',
            height: '430px',
            margin: '10px',
            // backgroundColor: 'lightgray',
                        backgroundColor: 'black',
             color:'white',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            padding: '10px',
            
          }}>
            <img src={product.image} alt={product.title} style={{
              width: '100%',
              height: '50%',
              objectFit: 'cover',
              marginBottom: '10px',
            }} />
            <h4 style={{ fontFamily: 'cursive',fontWeight:'bold'}}>{product.title}</h4>
            <p>{product.description}</p>
            <p>₹{product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)} style={{
               backgroundColor: "yellow",
               color: 'black',
               padding: '10px',
               border: 'none',
               borderRadius: '10px',
               fontWeight:'bolder',
              cursor: 'pointer',
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

{/* CONTACT FORM */}

<div id='cb'>
     <br></br>   <center><h4 style={{fontWeight:"bolder",fontFamily:"-moz-initial",fontSize:'35px'}}><hr></hr>CONTACT FORM</h4></center>
      </div>
     <Container fluid className="d-flex justify-content-center align-items-center " style={{ minHeight: '70vh' }}>
       <Row className="w-100">
         {/* Left Column: Contact Form */}
         <Col md={6} className="d-flex justify-content-center align-items-center flexwrap-wrap ">
           <animated.div style={fadeIn} className="w-75">
             {/* <h2 className="text-center mb-4">Contact Us</h2> */}
 
             {successMessage}
 
             <Form onSubmit={handleSubmit}>
               <Form.Group controlId="name">
                 <Form.Label style={{fontWeight:'bolder',fontFamily:'cursive',fontSize:'20px',}}>Name:</Form.Label>
                 <Form.Control
                   type="text"
                   placeholder="Enter your name"
                   name="name"
                   value={formData.name}
                   onChange={handleChange}
                   required
                 />
               </Form.Group>
 
               <br></br>   <Form.Group controlId="email">
                 <Form.Label style={{fontWeight:'bolder',fontFamily:'cursive',fontSize:'20px',}}>Email Address:</Form.Label>
                 <Form.Control
                   type="email"
                   placeholder="Enter your email"
                   name="email"
                   value={formData.email}
                   onChange={handleChange}
                   required
                 />
               </Form.Group>
 
               <br></br>           <Form.Group controlId="message">
                 <Form.Label style={{fontWeight:'bolder',fontFamily:'cursive',fontSize:'20px',}}>Message:</Form.Label>
                 <Form.Control
                   as="textarea"
                   rows={4}
                   placeholder="Your message"
                   name="message"
                   value={formData.message}
                   onChange={handleChange}
                   required
                 />
               </Form.Group>
 
             <br></br>  <Button variant="warning" type="submit" block style={{fontWeight:'bolder',fontFamily:'cursive',fontSize:'20px',}}>
                 Submit
               </Button>
             </Form>
           </animated.div>
         </Col>
 
         {/* Right Column: Images */}
    <Col md={6} className="d-flex justify-content-center align-items-center flexwrap-wrap">
          <div className="w-100">
            {/* <h3 className="text-center mb-4">Our Product</h3> */}
            <img
           src={cb1} 
              alt="Product"
              className="img-fluid rounded"
              style={{ width: '100%', objectFit: 'cover' }}
            />
          </div>
        </Col>
       </Row>
     </Container>

 {/* footer */}
<br></br><footer>
  <div class="footer-container">
    <div class="column">
      <h3><u>Our Range</u></h3><br></br>
     <b> <p>Television</p>
      <p>Refrigerators</p>
      <p>Washing-Machines</p>
      <p>Mobile-Phones</p>
      <p>Air-Conditioner</p>
      <p>Home-Theatre</p></b>
    </div>
    <div class="column">
      <h3><u>About Us</u></h3><br></br>
     <b> <p>Company</p>
      <p>Our Brands</p>
      <p>Global Footprint</p>
      <p>Contact</p>
      <p>Login</p>
      <p>Track Your Order</p></b>
    </div>
    <div class="column">
   <b>  <h3><u>Legal</u></h3><br></br></b>
     <b><p>Terms and Conditions</p>
      <p>Return/Exchange Request</p>
      <p>Shipping, Return & Refund Policy</p>
      <p>Site Map</p>
      <p>Privacy Policy</p></b>
    </div>
    <div class="column">
   <b> <h3><u>Timing :</u></h3> </b>
    <b> <p>Mon to Sat - 10:00 AM to 6:00 PM</p><br></br></b>
      <div class="subscribe-section">
      <b>  <h2>We,d Be Happy To</h2> </b>
     <b>  <center><h2>Assist You!</h2></center></b>
        <form onSubmit={handleSubscribe}>
          <input type="email" name="email" placeholder="Enter your email" required />
          <button type="submit" class="subscribe-btn">Subscribe</button>
        </form>
      </div>
      </div>
{/* Payment Methods and Copyright Section  */}
<div class="footer-bottom">
    <div class="payment-methods">
      <br></br><h4>Payment Methods!</h4>
      <img src={fs} style={{width: '220px' , height: '40px'}} alt="Payment Methods"/>
    </div>
   <hr></hr><div class="copyright">
      <h5>&copy; 2024 Bright Home Appliances Private Limited. All Rights Reserved.</h5>
    </div>
  </div>
  </div>
</footer>

    </div>
  );
};
export default Home;