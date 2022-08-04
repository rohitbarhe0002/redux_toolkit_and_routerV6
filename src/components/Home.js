
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { testState } from '../Redux/reducer/userReducer'

import { useDispatch } from "react-redux";




function Home() {
    const dispatch = useDispatch();
    console.log("comming");
    const navigate = useNavigate();
 
    const handleSubmit = () => {
        console.log("useEffect dsdgis running ");
        dispatch(testState('barche'));
        // axios.post('http://localhost:5000/api/auth/register', {
        //     username: "dilip", email: "wison@gmail.com", isAdmin: false, password: "11111111"
        // })
        //     .then((response) => {
        //         console.log(response, "++++++++++++++++response");
        //     }, (error) => {
        //         console.log(error, "=================error");
        //     });

        navigate('/login')
    }


    return (
        <Form className=''>
            <Row>
                <Col lg={6}>
                    <Form.Group className="lg-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <Form.Group className="lg-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <Form.Group className="lg-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    );
}

export default Home;