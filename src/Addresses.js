import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Addresses({ nextStep, prevStep, setData, data }) {
    return (
        <div>
            <div>
                <h1 className='text-center mt-5' >Fill in Address Details</h1>
                <Form>
                    <Container fluid="md" >
                        <Row className="justify-content-md-center mt-5 ">
                            <Col sm={6}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Address Line 1</Form.Label>
                                    <Form.Control placeholder="Address Line 1" onChange={(e)=>{setData({...data,Address1:e.target.value})}} />
                                </Form.Group>
                            </Col>
                            <Col sm={6}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Address Line 2</Form.Label>
                                    <Form.Control placeholder="Address Line 2" onChange={(e)=>{setData({...data,Address2:e.target.value})}} />
                                </Form.Group>
                            </Col>
                            
                        </Row>
                        <Row >
                            <Col sm={6}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>City</Form.Label>
                                    <Form.Control placeholder="Enter City Name" onChange={(e)=>{setData({...data,City:e.target.value})}} />
                                </Form.Group>
                            </Col>
                            <Col sm={3}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>State</Form.Label>
                                    <Form.Control placeholder="State" onChange={(e)=>{setData({...data,State:e.target.value})}} />
                                </Form.Group>
                            </Col>
                            <Col sm={3}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control placeholder="Zip code" onChange={(e)=>{setData({...data,Zip:e.target.value})}} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={3}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Apartment</Form.Label>
                                    <Form.Control placeholder="Apartment" onChange={(e)=>{setData({...data,Apartment:e.target.value})}} />
                                    
                                </Form.Group>
                            </Col>
                            <Col sm={3}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Region</Form.Label>
                                    <Form.Control  placeholder="Region" onChange={(e)=>{setData({...data,Region:e.target.value})}} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="primary" onClick={prevStep}>
                            Prev
                        </Button>
                        <Button className='mx-3' variant="primary" onClick={nextStep}>
                            Next
                        </Button>

                    </Container>
                </Form>
            </div>

        </div>
    )
}

export default Addresses