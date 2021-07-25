import React from 'react'
import '../Components-css/Career.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function Navb() {
    return (
        <div>
            <Navbar bg="light" expand="lg" className='p-4'>
                <Container>
                    <Navbar.Brand href="/">Geocoal Engineering pvt. Ltd</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/#/rexon/" className='p-3'>Home</Nav.Link>
                            <Nav.Link href="/#/rexon/about" className='p-3'>About</Nav.Link>
                            <Nav.Link href="/#/rexon/gallery" className='p-3'>Our gallery</Nav.Link>
                            <Nav.Link href="/#/rexon/services" className='p-3'>Services</Nav.Link>
                           
                            <Nav.Link className='p-3' exact activeClassName="active_class" href='/#/rexon/career'>Career</Nav.Link>
                            <Nav.Link className='p-3' exact activeClassName="active_class" href='/#/rexon/contact'>Contact Us</Nav.Link>
                        
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navb
