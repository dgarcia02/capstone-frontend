import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// CSS and Bootstrap
import '../App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';

// API
import showsApiSlice, { useFetchShowsQuery, useGetShowsByNameQuery } from '../api/services/shows-api-slice';


const HomeBody = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.currentUser)

    const { data, error, isLoading } = useFetchShowsQuery();
    // const { showData, refetch, isFetching } = showsApiSlice.useGetShowsByNameQuery(userInput)

    const [showModal, setShowModal] = useState(false)
    // const [userInput, setUserInput] = useState('')
    const [filter, setFilter] = useState('all')

    // this opens and closes the modal
    const handleClose = () => setShowModal(false)

    const handleChange = (event) => {
        setUserInput({ ...userInput, [event.target.name]: event.target.value })
    }

    // const searchEvent = (event) => {
    //     setUserInput(event.target.value)
    //     // event.preventDefault()
    //     // const userInput = event.target.value
    // }


    const searchShow = (userInput) => {
        // showData are the actual shows data: loop through 
        // userInput is what the user types 
        const { showData, refetch, isFetching } = showsApiSlice.useGetShowsByNameQuery(userInput)
    }

    return (
        <>
            <br />
            <br />
            <h4 className='upcomingShows'>Upcoming Shows</h4>
            <div>

            </div>
            {/* <form onSubmit={searchShow}>
                <input type="text" placeholder='search' /> 
                <button type='submit'>Click</button>
            </form> */}
            <br />
            <Container className='homeBody-container' fluid>
                <Row>
                    {/* <Col sm={2} className='sidePanel-container'>
                        <br />
                        <h5>Categories</h5>
                        <br />
                        <fieldset className='options'>
                            <select onChange={(event) => {setFilter(event.target.value)}}>
                                <option value="all">View All Shows</option>
                                <option value="theatre">Arts & Theatre</option>
                                <option value="comedy">Comedy</option>
                                <option value="magic">Magic</option>
                                <option value="miscellaneous">Miscellaneous</option>
                                <option value="musical">Musical</option>
                                <option value="psychics">Psychics / Mediums</option>
                            </select>
                        </fieldset>
                         <div>
                            <input type='checkbox' id='theatre' ></input>
                            <label htmlFor="">Arts & Theatre</label>
                        </div>
                         <div>
                            <input type='checkbox' id='comedy' ></input>
                            <label htmlFor="">Comedy</label>
                        </div>
                        <div>
                            <input type='checkbox' id='magic' ></input>
                            <label htmlFor="">Magic</label>
                        </div>
                        <div>
                            <input type='checkbox' id='miscellaneous' ></input>
                            <label htmlFor="">Miscellaneous</label>
                        </div>
                        <div>
                            <input type='checkbox' id='musical' ></input>
                            <label htmlFor="">Musical</label>
                        </div>
                        <div>
                            <input type='checkbox' id='psychics' ></input>
                            <label htmlFor="">Psychics / Mediums</label>
                        </div>
                    </Col> */}
                    <Col sm={11} className='shows-container'>
                        {error ? (
                            <>Oh no, there was an error</>
                        ) : isLoading ? (
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                            // <>Loading...</>
                        ) : data ? (
                            <div className='allShows'>
                                {data._embedded.events.map((event) => {
                                    return (
                                        <div className='individualShow' key={event.id} id={event.id}>
                                            {/* giving the setShowModal an event.id that way that specific event's info shows up when clicked */}
                                            <img 
                                                src={event.images[0].url} 
                                                alt={event.name} 
                                                height={250} 
                                                onClick={(e) => setShowModal(event.id)} 
                                                className='mainImg' 
                                            />
                                            <Modal show={showModal === event.id} onHide={handleClose}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>{event.name}</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <img 
                                                        src={event.images[0].url} 
                                                        alt={event.name} 
                                                        height={250} 
                                                    />
                                                    <h6>{event.classifications[0].genre.name}</h6>
                                                    <h6>{event._embedded.venues[0].name}</h6>
                                                    <h6>{event.dates.start.localDate}</h6>
                                                    <h6>{event.dates.start.localTime}</h6>
                                                    <h6>${event.priceRanges[0].min}</h6>
                                                    <p>Please Note: {event.info}</p>
                                                    {/* if the user is logged in, then they can add to wishlist */}
                                                    { currentUser && 
                                                        <Button variant="outline-secondary" type="submit">
                                                            <i class="fas fa-heart"></i>
                                                        </Button>
                                                    }  
                                                    <Button variant="outline-secondary" type="submit">
                                                        <a href={event.url} target='_blank'>Buy Tickets</a>
                                                    </Button>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                </Modal.Footer>
                                            </Modal>
                                            <h3>{event.name}</h3>
                                            {/* if the user is logged in, then they can add to wishlist */}
                                            {/* { currentUser && 
                                                <Button variant="outline-secondary" type="submit">
                                                    <i class="fas fa-heart"></i>
                                                </Button>
                                            } */}
                                    </div>
                                    )
                                })}
                            </div>
                        ) : null }
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomeBody;