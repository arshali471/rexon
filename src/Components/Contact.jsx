import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../Components-css/Contact.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Contact() {
    return (
        <div className='m-4'>
            <Container className='contact p-4'>
                <Row>
                    <Col>
                        <h2>Connect with us</h2>
                        <p>We would love to respond to your queries. <br /> Feel free to get in touch with us.</p>
                        <Row>
                            <Col sm={7} className='fcol p-4'>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter first name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter last name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
                                    </Form.Group>
                                    <Button variant="outline-primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Col>
                            <Col sm={5}>
                                <div className="reach p-4">
                                    <h4>Reach us</h4>
                                    <Row>
                                        {/* <Col sm></Col> */}
                                        <Col sm>Email:</Col>
                                        <Col sm><a href="mailto:geocoalindia@gmail.com">geocoalindia@gmail.com</a></Col>
                                        <Col sm></Col>
                                    </Row>
                                    <Row>
                                    {/* <Col sm></Col> */}
                                        <Col sm>Phone:</Col>
                                        <Col sm><a href="tel:+917360073897">+917360073897</a>
                                        ,
                                        <a href="tel:+919471191195">+919471191195</a></Col>
                                        <Col sm></Col>
                                    </Row>
                                    <Row>
                                    {/* <Col sm></Col> */}
                                        <Col sm>Address: </Col>
                                        <Col sm>Janki Complex, Bara Jamuna, Barwadda,
                                        Dhanbad-826001 (Jharkhand) India</Col>
                                        <Col sm></Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact
