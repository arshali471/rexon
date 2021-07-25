import React from 'react'
import '../Components-css/Career.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function Career() {
    return (
        <div className='career'>
            <Container>
                <Row>
                    <Col>
                        <h3 className='wh p-2'>Why Geocoal?</h3>
                        <Row>
                            <Col sm>
                                <img src="http://www.geocoal.in/career.jpg" alt="" width='100%' height='80%' className='p-4' />
                            </Col>
                            <Col sm>
                                <p className='pt-4 text' >Located in a region which lack such facilities but has tremendous possibilities. <br />
                                    Open and informal culture where we value integrity, commitment, teamwork and excellence. <br />
                                    A ‘Learning by Doing’ philosophy which encourages decision making as well as skill building. A focus on ‘long term creation of wealth’ of our employees. <br />
                                    If you are a young, talented individual with a personal value system who enjoys challenges, has a passion to excel and can fit into our organizational culture, you could be a part of the growth journey at GEPL. <br />
                                    At the heart of GEPL are people who run this organization. It is our endeavor to develop our people continuously by focusing on their career development by providing them adequate training in a positive work environment.</p>
                                    <p className='text1 pb-4'>Anyone interested to join us drop your cv here:- {''}
                                    <Button variant="info">Apply</Button>
                                    </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Career
