import React, { useState } from 'react'
import '../App.css';
import { useSelector, useDispatch } from 'react-redux'

// CSS and Bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'

// Global States
import { logIn  } from '../features/currentUser/currentUserSlice'

// Components
import LogIn from '../features/userAuth/LogIn'
import NewUserForm from '../features/userAuth/NewUserForm';

const Navbar = () => {
    const dispatch = useDispatch()
    // come back and check if this works correctly
    // this is to have access to the global state locally
    const currentUser = useSelector(state => state.currentUser)

    const [show, setShow] = useState(false)
    const [showNewUserForm, setShowNewUserForm] = useState(false)

    // this opens and closes the modal
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    // value=>!value will set the boolean state to the opposite 
    const handleShowUserForm = () => setShowNewUserForm(value => !value)

    return (
        <div className="nav-container">
            <nav className="navbar">
                <img src="https://i.imgur.com/1A8O0YU.png" alt="" width={80}/>
                <ul className="nav-menu">
                    <li>
                        <a href="#home" className="nav-links">
                            <i class="fas fa-home"></i> 
                        </a>
                    </li>
                    {/* if user is logged in they can see their profile */}
                    { currentUser &&
                        <li><a href="#" className="nav-links"><i class="fas fa-user"></i></a></li>
                    }

                    { currentUser ?
                        <li>
                            <Button variant='outline-secondary' onClick={() => dispatch(logIn())}>
                                Log Out
                            </Button>
                        </li>
                        :
                        <li>
                            {/* this is the button that opens the modal */}
                            <Button variant='outline-warning' onClick={handleShow}>
                                Log In
                            </Button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                       {showNewUserForm ? 'Sign Up' : 'Log In'}
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    { showNewUserForm ? <NewUserForm /> : <LogIn /> }
                                </Modal.Body>
                                <Modal.Footer>
                                    {/* if someone clicks on 'need an account'
                                    - open the NewUserForm
                                    - onClick={} */}
                                    <p onClick={handleShowUserForm} className='switchAccount'>
                                        { showNewUserForm ? 'Already have an account?' : 'Need an account?' }
                                    </p>
                                </Modal.Footer>
                            </Modal>  

                            {/* dont forget to add the logIn dispatch to show current use logged in */}
                            {/* <button onClick={()=> dispatch(logIn())}>Log In</button> */}
                        </li>
                    } 
                   
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
