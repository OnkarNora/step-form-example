import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function PersonalDetails({ nextStep, setData, data }) {


    return (
        <div>
            <h1 className='text-center mt-5' >Fill in Personal Details</h1>
            <Form>
                <Container fluid="md" >
                    <Row className="justify-content-md-center mt-5 ">
                        <Col sm={4}>
                            <Form.Group className="mb-3" >
                                <Form.Label>First Name</Form.Label>
                                <Form.Control placeholder="Enter First Name" onChange={(e)=>{setData({...data,FirstName:e.target.value})}} />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control placeholder="Last Name"  onChange={(e)=>{setData({...data,LastName:e.target.value})}} />
                            </Form.Group>
                            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Username</Form.Label>
                                <Form.Control placeholder="UserName" onChange={(e)=>{setData({...data,Username:e.target.value})}} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row >
                        <Col sm={4}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Phone</Form.Label>
                                <Form.Control placeholder="Enter Phone" onChange={(e)=>{setData({...data,Phone:e.target.value})}} />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Height</Form.Label>
                                <Form.Control placeholder="Height"  onChange={(e)=>{setData({...data,Height:e.target.value})}}/>
                            </Form.Group>
                            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Current Designation</Form.Label>
                                <Form.Control placeholder="Current Designation" onChange={(e)=>{setData({...data,Designation:e.target.value})}} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setData({...data,Email:e.target.value})}}/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col sm={3}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e)=>{setData({...data,Password:e.target.value})}} />
                            </Form.Group>
                            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                        </Col>
                    </Row>
                    <Button variant="primary" onClick={nextStep}>
                        Next
                    </Button>

                </Container>
            </Form>
            
            


        </div>

    )
}

export default PersonalDetails