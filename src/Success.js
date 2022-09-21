import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Success() {
    return (
        <div className='mx-5 mt-5'>
            <Container>
            <Row className="justify-content-md-center mt-5 ">
            <Col sm="7">
            <Alert variant="success">
                <Alert.Heading>Succes</Alert.Heading>
                <p>
                    Your Data has been Successfully Collected, Thank you for your Response
                </p>
                
            </Alert>
            </Col>
            </Row>

            </Container>
        </div>
    )
}

export default Success