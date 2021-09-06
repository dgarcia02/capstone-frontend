import React from 'react'
import './App.css'

// Components
import { useFetchShowsQuery } from './api/shows/shows-api-slice';
import Navbar from './components/Navbar'
// import Profile from './features/profiles/Profile'
// import NewProfileForm from './features/profiles/NewProfileForm'
// import EditProfileForm from './features/profiles/EditProfileForm'



const App = () => {

  const { data, error, isLoading } = useFetchShowsQuery();

  return (
    <div className="container">
      <Navbar />
      <h1>header goes here</h1>
      <div className='shows-container'>
        {error ? (
          <>Oh no, there was an error</>
          ) : isLoading ? (
            <>Loading...</>
            ) : data ? (
              <>
                <p>Number of shows fetched: {data._embedded.events.length}</p>
                <h3>{data._embedded.events.map((event) => (
                      <>
                        <h3>{event.name}</h3>
                        <h5>{event.locale}</h5>
                        <img src={event.images[0].url} alt={event.name} height={250} />
                      </>
                ))}</h3>
              </>
            ) : null }
        
      
      </div>

        {/* <NewProfileForm />
        <Profile />
        <EditProfileForm /> */}
        {/* <div className='headerContainer'>
                <img src="https://i.imgur.com/6LtVTDQ.jpg"/>
        </div> */}
        {/* <button onClick={}></button> */}
    </div>
  )
}

export default App
