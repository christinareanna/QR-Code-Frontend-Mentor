import React from "react";
import { Container, Card, Col,} from 'react-bootstrap';
import QRCode from "./images/image-qr-code.png";
import "./App.css";


const Layout = () => {

    return (
        <Container className='container'>
            <Col>
                <Card style={{borderRadius: "5%", border: "none", width: "375px", height: "500px" }}>
                    <Card.Img variant="top" src={QRCode} />
                    <Card.Body>
                        <Card.Title>Improve your front-end skills by building projects</Card.Title>
                        <Card.Text>
                            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
                        </Card.Text>
                        {/* <Button variant="primary">Read More</Button> */}
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    )
}

export default Layout;
