import React, { useState } from 'react'
import '../App.css';
import { useSelector, useDispatch } from 'react-redux'
import { logIn  } from '../features/currentUser/currentUserSlice'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Components
import currentUser from '../features/currentUser/currentUserSlice'

const Navbar = () => {
    const dispatch = useDispatch()
    // come back and check if this works correctly
    const currentUser = useSelector(state => state.currentUser)

    const [show, setShow] = useState(false)

    // this opens and closes the modal
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <div className="nav-container">
            <nav className="navbar">
                <Button variant='warning' onClick={handleShow}>
                    Launch demo modal
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>  

                <h2 id="nav-logo">Logo</h2>
                <div className="menu-toggle" id="mobile-menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className="nav-menu">
                    <li>
                        <a href="#" className="nav-links">Home</a>
                    </li>
                    {
                        currentUser ?
                        <li><a href="#" className="nav-links">Profile</a></li>
                        : ''
                    }

                    {
                        currentUser ?
                        <li>
                            <button onClick={()=> dispatch(logIn())}>Log Out</button>
                        </li>
                        :
                        <li>
                            <button onClick={()=> dispatch(logIn())}>Log In</button>
                            {/* <button onClick={()=> dispatch(open_close())}>Log In</button> */}
                            {/* <modal
                                open={ loginOpen }
                                onClose={ ()=>dispatch(open_close()) }
                                center
                                classNames={{
                                    overlay: 'customOverlay',
                                    modal: 'customModal',
                                }} >
                                <LoginForm /> 
                            </modal> */}
                        </li>
                    } 
                   
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;