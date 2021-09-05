import React from 'react'
import '../App.css';
import { useSelector } from 'react-redux'

// Components
// import LoginForm from './LogIn';

const Navbar = () => {
    const isLogged = useSelector(state => state.isLogged)

    return (
        <div className="nav-container">
            <nav className="navbar">
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
                        isLogged ?
                        <li><a href="#" className="nav-links">Profile</a></li>
                        : ''
                    }

                    {
                        isLogged ?
                        <li>
                            <button onClick={()=> dispatch(logIn())}>Log Out</button>
                        </li>
                        :
                        <li>
                            <button onClick={()=> dispatch(open_close())}>Log In</button>
                            <modal
                                open={ loginOpen }
                                onClose={ ()=>dispatch(open_close()) }
                                center
                                classNames={{
                                    overlay: 'customOverlay',
                                    modal: 'customModal',
                                }} >
                                {/* <LoginForm /> */}
                            </modal>
                        </li>
                    } 
                   
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;