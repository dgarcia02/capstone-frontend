import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'react-bootstrap/Form';

import { newUser } from './newUserSlice'

const NewUserForm = () => {
    // putting these states here because you can't directly change store state from here
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const onUsernameChange = e => setUsername(e.target.value)
    const onPasswordChange = e => setPassword(e.target.value)

    const onSaveUser = () => {
        if (username && password) {
            // this is changing the user state globally
            dispatch(
                newUser({
                    username,
                    password
                })
            )
            // this is to avoid overwriting the state
            setUsername('')
            setPassword('')
        }
    }

    return (
        <div className='newUser-container'>
            <h3>Sign Up</h3>
            <Form className="newUserForm">
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
                <br/>
                <br/>
                <p onClick={}>Already have an account?</p>
            </Form>
        </div>
    )
}