import React, { useState } from 'react'
import '../App.css';
// import { useSelector, useDispatch } from 'react-redux';
import NewUserForm from '../features/userAuth/NewUserForm'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LogInForm = () => {
    // Toggle Error Messages
    const [toggleError, setToggleError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    // Toggle States
        // setting this to true b/c login will appear in the navbar initially
    const [toggleUserLogin, setToggleUserLogin] = useState(true)
    const [toggleUserLogout, setToggleUserLogout] = useState(false)

    const handleUserLogout = () => {
        handleToggleUserLogout()
    }

    const handleToggleUserLogout = () => {
        if (toggleUserLogout) {
            setToggleUserLogout(false)
        } else {
            setToggleUserLogin(true)
        }
    }

    const handleToggleNewUserForm = () => {
        setToggleError(false)
        if (toggleUserLogin === true) {
            setToggleUserLogin(false)
        } else {
            setToggleUserLogin(true)
        }
    }

    return (
        <div id="form-container">
            {/* to put a ternary, check the state of current user */}
            <Form className="loginForm">
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>
            </Form>
        </div>
    )
}

export default LogInForm;