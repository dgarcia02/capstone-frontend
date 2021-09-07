import * as React from 'react'
import { useState } from 'react'
import '../../App.css'
import { useDispatch, useSelector } from 'react-redux'
// import { unwrapResult } from '@reduxjs/toolkit'
// import { signUpUser } from './userSlice'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// API
import { useFetchUsersQuery, useAddUserMutation } from './userSlice';
// import { newUser } from './userSlice'

const NewUserForm = () => {
    // const { data, error, isLoading } = useFetchUsersQuery(data);

    const dispatch = useDispatch()

    // const { isFetching, isSuccess, isError, errorMessage  } = useSelector(useSelector)

    // this is grabbing the data from the form
    const onSubmit = (data) => {
        dispatch(signUpUser(data))
    }

    const emptyUser = { username: '', password: '' }

    // // putting these states here because you can't directly change store state from here
    const [user, setUser] = useState(emptyUser)
    const [addUser, {isLoading}] = useAddUserMutation()

    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const handleAddUser = () => addUser(user).then(() => setUser(emptyUser))

    return (
        <div className='newUser-container'>
            <Form 
                className="newUserForm" 
                onSubmit={handleAddUser}
                // method='POST'
            >
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Username</Form.Label>
                    <Form.Control name='username' type="text" placeholder="Enter username" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Enter password" onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                   { isLoading ? 'Signing Up...' : 'Sign Up' }
                   {/* Sign Up */}
                </Button>
            </Form>
        </div>
    )
}

export default NewUserForm;




// this is the second example onSubmit
// const onSubmit = (data) => {
//     dispatch(signUpUser(data))
//     .then(unwrapResult)
//     .then((originalPromiseResult) => {
//       // handle result here
//     })
//     .catch((rejectedValueOrSerializedError) => {
//       // handle result here
//     })
// }

// this is dispatching the action to the global state
// dispatch(signUpUser(data))

 // useEffect(() => {
 //    return () => {
//        dispatch(clearState())
 //    }
    // }, [])

    // useEffect(() => {
    //     if (isSuccess) {
    //         dispatch(clearState())
    //         history.push('/')
    //     }
    //     if (isError) {
    //         toast.error(errorMessage)
    //         dispatch(clearState())
    //     }
    // }, [isSuccess, isError])


        // const onSaveUser = () => {
    //     if (username && password) {
    //         // this is changing the user state globally
    //         dispatch(
    //             user({
    //                 username,
    //                 password
    //             })
    //         )
    //         // this is to avoid overwriting the state
    //         setUsername('')
    //         setPassword('')
    //     }
    // }