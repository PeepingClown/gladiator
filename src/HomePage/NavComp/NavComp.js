import {useState} from 'react';
import './NavComp.css';
import Button from 'react-bootstrap/Button';
import { Container , Nav, Navbar, NavDropdown } from 'react-bootstrap';
import BrandImage from '../../images/gladiator-big.png';
import Avatar from '../../images/gladiator-1.png';
import Fab from '@mui/material/Fab';
import Switch from '@mui/material/Switch';

export default function NavComp(){
    
    return(
        <Navbar style={{backgroundColor:'#F4E185'}} className="nav-outer" expand="lg">
        <Container>
            <Navbar.Brand className="brand-name" onClick={()=>window.location="/mindy"}>
                
                    <img className="brand-image" src={BrandImage}/>gladiator
            
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                {/* <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link> */}
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
            <Nav>
                <Nav.Link>
                
                </Nav.Link>
                <Nav.Link>
                <Fab color="primary" aria-label="add">
                    <img src={Avatar}/>
                </Fab>
                </Nav.Link>
                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}