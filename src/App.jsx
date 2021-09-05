import React from 'react'
import './App.css'

// Components
import Navbar from './components/Navbar'
import Profile from './features/profiles/Profile'
import NewProfileForm from './features/profiles/NewProfileForm'

const App = () => {

  return (
    <div className="container">
      <h1>Las Vegas Guide</h1>
      {/* <Navbar /> */}
        <NewProfileForm />
        <Profile />
        {/* <div className='headerContainer'>
                <img src="https://i.imgur.com/6LtVTDQ.jpg"/>
        </div> */}
        {/* <button onClick={}></button> */}
    </div>
  )
}

export default App
