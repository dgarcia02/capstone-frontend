import React, { useState } from 'react'
import '../App.css';
import { useSelector, useDispatch } from 'react-redux'
import { logIn  } from '../features/currentUser/currentUserSlice'

// CSS and Bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Components
import currentUser from '../features/currentUser/currentUserSlice'
import LogIn from './LogIn'

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
                <img src="https://i.imgur.com/1A8O0YU.png" alt="" width={80}/>
                {/* <div className="menu-toggle" id="mobile-menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div> */}
                <ul className="nav-menu">
                    <li>
                        <a href="#home" className="nav-links">Home</a>
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
                            {/* this is the button that opens the modal */}
                            <Button variant='warning' onClick={handleShow}>
                                Log In
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Log In</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <LogIn />
                                </Modal.Body>
                                <Modal.Footer>
                                </Modal.Footer>
                            </Modal>  

                            {/* dont forget to add the logIn dispatch to show current use logged in */}
                            {/* <button onClick={()=> dispatch(logIn())}>Log In</button> */}
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
