import * as React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../Image/logo2.png';

const Navigation = () => {
    const { user, logOut } = useAuth();
    console.log(user)
    return (
        <Navbar collapseOnSelect className='px-3' expand="lg" bg="white" variant="light">
            <Navbar.Brand href="#home">
                <img width='150px' src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/myorder">Myorder</Nav.Link>
                    <Nav.Link as={Link} to="/map">Map</Nav.Link>
                    {
                        user.email && <Nav.Link href="#" className='fw-bold fs-6 text-warning'>{user.displayName}</Nav.Link>
                    }
                    {
                        user.email ? <button onClick={logOut} >Sign Out</button> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;