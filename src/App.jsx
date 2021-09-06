import React from 'react'

// Components
import { useFetchShowsQuery } from './api/shows/shows-api-slice';
import Nav from './components/Navbar'
import Header from './components/Header'
// import Profile from './features/profiles/Profile'
// import NewProfileForm from './features/profiles/NewProfileForm'
// import EditProfileForm from './features/profiles/EditProfileForm'


// CSS and Bootstrap
import './App.css'



const App = () => {

  const { data, error, isLoading } = useFetchShowsQuery();

  return (
    <div className="container">
      <Nav />
      <Header />
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
       
        
    </div>
  )
}

export default App
