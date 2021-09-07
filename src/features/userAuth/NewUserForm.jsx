import * as React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// CSS and Bootstrap
import '../../App.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Components
import NewProfileForm from '../profiles/NewProfileForm'

// Global States
import { logIn } from '../currentUser/currentUserSlice';

// API
import { useFetchUsersQuery, useAddUserMutation } from './userSlice';

const NewUserForm = () => {
    // const { data, error, isLoading } = useFetchUsersQuery(data);
    // const login = useSelector(logIn)
    const dispatch = useDispatch()

    const emptyUser = { username: '', password: '' }

    // // putting these states here because you can't directly change store state from here
    const [user, setUser] = useState(emptyUser)
    const [addUser, {isLoading}] = useAddUserMutation()
    // const [currentUser, setCurrentUser] = useState({})

    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const handleAddUser = () => {
        addUser(user)
        .then((response) => {
            // setCurrentUser(response.data)
            setUser(emptyUser)
        })
    }

    return (
        <div className='newUser-container'>
            <button onClick={() => dispatch(logIn())}>i hope this works...</button>
           
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





    // this is grabbing the data from the form
    // const onSubmit = (data) => {
    //     dispatch(signUpUser(data))
    // }

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