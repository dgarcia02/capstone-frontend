import React from 'react'

// Components
import Nav from './components/Navbar'
import Header from './components/Header'
import HomeBody from './components/HomeBody'
// import Profile from './features/profiles/Profile'
import NewProfileForm from './features/profiles/NewProfileForm'
// import EditProfileForm from './features/profiles/EditProfileForm'


// CSS and Bootstrap
import './App.css'



const App = () => {

  return (
    <div className="main-container">
      <Nav />
      <Header />
      <NewProfileForm />
      <HomeBody />
        {/* <NewProfileForm />
        <Profile />
        <EditProfileForm /> */}
       
        
    </div>
  )
}

export default App
