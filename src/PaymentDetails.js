import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PaymentDetails({ nextStep, prevStep, setData, data }) {
    return (
        <div>
            <div>
                <h1 className='text-center mt-5' >Fill in Payment Details</h1>
                <Form>
                    <Container fluid="md" >
                        <Row className="justify-content-md-center mt-5 ">
                            <Col sm={6}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Credit Card Number</Form.Label>
                                    <Form.Control placeholder="Credit Card Number" onChange={(e)=>{setData({...data,CardNo:e.target.value})}} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center " >
                            <Col sm={3}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>CVV</Form.Label>
                                    <Form.Control placeholder="CVV" onChange={(e)=>{setData({...data,Cvv:e.target.value})}}/>
                                </Form.Group>
                            </Col>
                            <Col sm={3}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Expiry Date</Form.Label>
                                    <Form.Control type="date" placeholder="Expiry Date" onChange={(e)=>{setData({...data,ExpiryDate:e.target.value})}} />
                                </Form.Group>

                            </Col>
                        </Row>
                        <Row className="justify-content-md-center ">
                            <Col sm={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name on the Card</Form.Label>
                                    <Form.Control placeholder="Name on the Card" onChange={(e)=>{setData({...data,NameOnTheCard:e.target.value})}}/>
                                </Form.Group>
                            </Col>

                        </Row>
                        <Row className="justify-content-md-center ">
                            <Col sm={6}>
                                <Button variant="primary mt-3" onClick={prevStep}>
                                    Prev
                                </Button>
                                <Button className='mx-3 mt-3' variant="primary" onClick={nextStep}>
                                    Submit
                                </Button>
                            </Col>

                        </Row>


                    </Container>
                </Form>
            </div>
        </div>
    )
}

export default PaymentDetails