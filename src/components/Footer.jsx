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
                    <Row className="row-container">
                        <Col sm={5} className='col-Container'>
                        </Col>
                        <Col sm={5} className='col-Container'>
                            <img src="https://i.imgur.com/bbKC6AC.png" alt="Logo" width={100}/>
                            <br />
                            <a href="https://github.com/dgarcia02" target='_blank'><i class="fab fa-github navIcons"></i></a>
                            <a href="https://www.linkedin.com/in/dulcegarcia2/" target='_blank'><i class="fab fa-linkedin navIcons"></i></a>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer;