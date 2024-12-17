import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './images/icons8-login-25.png';
import img2 from './images/icons8-heart-25.png';
import img3 from './images/icons8-search-25.png';


import { Link as ScrollLink } from 'react-scroll';

const Layout = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          {/* Left side - Website Logo */}
          <Navbar.Brand href="/" style={{ flex: 1.5 }}>Bright Home Appliances..</Navbar.Brand>

          {/* Navbar Toggler for mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Navbar Collapse - Center links and icons to the right */}
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
            {/* Navigation Links */}
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <ScrollLink to="ab" smooth={true} duration={100}> {/* Scroll to contact-form */}
                <Nav.Link>About</Nav.Link>
              </ScrollLink>
              <ScrollLink to="product" smooth={true} duration={100}> {/* Scroll to contact-form */}
                <Nav.Link>Products</Nav.Link>
              </ScrollLink>
              <ScrollLink to="cb" smooth={true} duration={100}> {/* Scroll to contact-form */}
                <Nav.Link>Contact</Nav.Link>
              </ScrollLink>

            </Nav>

            {/* Right-aligned Icons */}
            <Nav>
              <Nav.Link as={Link} to="/Login" style={{ paddingRight: '10px' }}>
                <img src={img1} alt="Heart Icon" style={{ width: '28px', height: '28px' }} />
              </Nav.Link>
              <Nav.Link as={Link} to="#">
                <img src={img2} alt="Search Icon" style={{ width: '28px', height: '28px' }} />
           </Nav.Link>
           <Nav.Link as={Link} to="#">
                <img src={img3} alt="Search Icon" style={{ width: '28px', height: '28px' }} />
           </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Render nested routes */}
      <Outlet />
    </div>
  );
};

export default Layout;
