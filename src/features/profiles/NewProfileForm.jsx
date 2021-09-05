import React, { useState } from 'react'

const NewProfileForm = () => {
    

    return (
        <div className='newProfile-container'>
            <h3>Create new profile.</h3>
            <form>
                <label htmlFor="profileFirstName">First Name</label>
                <input
                    type='text'
                    id='profileFirstName'
                    name='profileFirstName'
                   
                    
                />
                <br/>
                <label htmlFor='profileLastName'>Last Name</label>
                <input 
                    type='text'
                    id='profileLastName'
                    name='profileLastName'
                    
                    
                />
                <br/>
                <label htmlFor='profileEmail'>Email</label>
                <input 
                    type='email'
                    id='profileEmail'
                    name='profileEmail'
                   
                    
                />
                <br/>
                <label htmlFor='profileImage'>Image</label>
                <input 
                    type='text'
                    id='profileImage'
                    name='profileImage'
                    
                    
                />
                <br/>
                <label htmlFor='profileGender'>Gender</label>
                <input 
                    type='text'
                    id='profileGender'
                    name='profileGender'
                    
                    
                />
                <br/>
                <label htmlFor='profileDob'>Date of Birth</label>
                <input 
                    type='text'
                    id='profileDob'
                    name='profileDob'
                    
                    
                />
                <br/>
                <label htmlFor='profilePhone'>Phone</label>
                <input 
                    type='text'
                    id='profilePhone'
                    name='profilePhone'
                    
                    
                />
                <br/>
                <label htmlFor='profileCity'>City</label>
                <input 
                    type='text'
                    id='profileCity'
                    name='profileCity'
                   
                    
                />
                <br/>
                <label htmlFor='profileState'>State</label>
                <input 
                    type='text'
                    id='profileState'
                    name='profileState'
                    
                   
                />
                <br/>
                <button type='submit'>Save Profile</button>
            </form>
        </div>
    )

}

export default NewProfileForm;