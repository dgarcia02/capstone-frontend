import React from 'react'
import './App.css'

// Components
import { useFetchShowsQuery } from './api/shows/shows-api-slice';
// import Navbar from './components/Navbar'
// import Profile from './features/profiles/Profile'
// import NewProfileForm from './features/profiles/NewProfileForm'
// import EditProfileForm from './features/profiles/EditProfileForm'



const App = () => {

  const { data, error, isLoading } = useFetchShowsQuery();

  return (
    <div className="container">
      <h1>Las Vegas Guide</h1>
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
        
      
        {/* <p>Number of shows fetched: {data.length}</p>
        <table>
          <thead>
            <tr>
              <th>Name:</th>
              <th>Event:</th>
            </tr>
          </thead>
          <tbody>
            {data.events.map((show) => (
              <tr key={show.id}>
                <td>{show.name}</td>
                <td>{show.event}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>

      {/* <Navbar /> */}
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
