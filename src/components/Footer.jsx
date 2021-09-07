import React from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <>
            <footer>
                <Container className='footer-container'>
                    <Row>
                        <Col sm={5}>
                            <h6>Contact</h6>
                        </Col>
                        <Col sm={5}>
                            <img src="https://i.imgur.com/1A8O0YU.png" alt="Logo" width={100}/>
                            <br />
                            <a href="https://github.com/dgarcia02" target='_blank'><i class="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/dulcegarcia2/" target='_blank'><i class="fab fa-linkedin"></i></a>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer;