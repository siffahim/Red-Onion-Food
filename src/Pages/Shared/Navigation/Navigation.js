import * as React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../../Image/logo2.png';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect className='px-3' expand="lg" bg="white" variant="light">
            <Navbar.Brand href="#home">
                <img width='150px' src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;