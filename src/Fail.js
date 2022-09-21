import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Fail() {
  return (
    <div className='mx-5 mt-5'>
            <Container>
            <Row className="justify-content-md-center mt-5 ">
            <Col sm="7">
            <Alert variant="danger">
                <Alert.Heading>Fail</Alert.Heading>
                <p>
                    Failed to submit data, please check you have filled all the values.
                </p>
                
            </Alert>
            </Col>
            </Row>

            </Container>
        </div>
  )
}

export default Fail