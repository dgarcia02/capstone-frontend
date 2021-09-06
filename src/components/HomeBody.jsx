import React, { useState } from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';

// API
import { useFetchShowsQuery } from '../api/services/shows-api-slice';


const HomeBody = () => {
    const { data, error, isLoading } = useFetchShowsQuery();

    const [show, setShow] = useState(false)

    // this opens and closes the modal
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true) 

    return (
        <>
            <Container className='homeBody-container'>
                <Row>
                    <Col sm={2}>This is the side panel</Col>
                    <Col sm={10} className='shows-container'>
                        {error ? (
                            <>Oh no, there was an error</>
                        ) : isLoading ? (
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                            // <>Loading...</>
                        ) : data ? (
                            <div className='allShows'>
                                {data._embedded.events.map((event) => (
                                    <div className='individualShow'>
                                        <img src={event.images[0].url} alt={event.name} height={250} onClick={handleShow} className='mainImg' />
                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>{event.name}</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <img src={event.images[0].url} alt={event.name} height={250} />
                                                <h6>{event.classifications[0].genre.name}</h6>
                                                <h6>{event._embedded.venues[0].name}</h6>
                                                <h6>{event.dates.start.localDate}</h6>
                                                <h6>{event.dates.start.localTime}</h6>
                                                <h6>${event.priceRanges[0].min}</h6>
                                                <p>Please Note: {event.info}</p>
                                                <Button variant="outline-secondary" type="submit">
                                                    <i class="fas fa-heart"></i>
                                                </Button>
                                                <Button variant="outline-secondary" type="submit">
                                                    <a href={event.url} target='_blank'>Buy Tickets</a>
                                                </Button>
                                            </Modal.Body>
                                            <Modal.Footer>
                                            </Modal.Footer>
                                        </Modal>
                                        <h3>{event.name}</h3>
                                        <Button variant="outline-secondary" type="submit">
                                            <i class="fas fa-heart"></i>
                                        </Button>
                                    </div>
                                 ))}
                            </div>
                        ) : null }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomeBody;