import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../Components-css/Footer.css'

function Footer() {
    return (
        <div className='footer p-4'>
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <Col sm>
                                <h3>SYNOPSIS</h3>
                                <p>We are customer focussed and customized,dedicated to the customers cause,resposive,efficient,value adding and most of all cost effective without compromising "Work in ethics & Truth in precision"</p>
                            </Col>
                            <Col sm>
                                <h3>Contact Us</h3>
                                <h5>Address:</h5>
                                <p>Janki Complex, Bara Jamuna, Barwadda,
                                    Dhanbad-826001 (Jharkhand) India</p>
                                    <h5>Email:</h5>
                                    <a href="mailto:geocoalindia@gmail.com">geocoalindia@gmail.com</a>
                                    <h5>Phone:</h5>
                                    <a href="tel:+917360073897">+917360073897</a> <br />
                                    <a href="tel:+919471191195">+919471191195</a>
                            </Col>
                            <Col sm>
                                  <h3>Social Media</h3>
                                  <p> <img src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook.png" alt=''/> {''} Facebook</p>
                                  <p><img src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png" alt=''/> {''} LinkedIn</p>
                                  <p><img src="https://img.icons8.com/ios-filled/30/ffffff/twitter.png" alt=''/> {''} Twitter</p>
                                  <p><img src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-circle.png" alt=''/> {''} Instagram</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
