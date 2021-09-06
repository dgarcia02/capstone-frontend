import React from 'react'
import '../App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// API
import { useFetchShowsQuery } from '../api/services/shows-api-slice';


const HomeBody = () => {
    const { data, error, isLoading } = useFetchShowsQuery();

    return (
        <>
            <Container className='homeBody-container'>
                <Row>
                    <Col sm={2}>This is the side panel</Col>
                    <Col sm={10} className='shows-container'>
                        {error ? (
                            <>Oh no, there was an error</>
                        ) : isLoading ? (
                            <>Loading...</>
                        ) : data ? (
                            <div className='allShows'>
                                {data._embedded.events.map((event) => (
                                    <div className='individualShow'>
                                        <h3>{event.name}</h3>
                                        <h5>{event.locale}</h5>
                                        <img src={event.images[0].url} alt={event.name} height={250} />
                                        <Button variant="outline-secondary" type="submit">
                                            <i class="fas fa-heart"></i>
                                        </Button>
                                        <Button variant="outline-secondary" type="submit">
                                            <a href={event.url} target='_blank'>Buy Tickets</a>
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