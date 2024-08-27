// 1. Build one Form using Reactjs and also use usestate in 
// it and data must be shown after submitting the form 
// => Form Validation ->  regex  / usestate / onsubmit button data must be shown
// Form validation using regex // proper form validation in js 

import "./Body.css"
// import React, {useState}

import { useState } from "react"
// npm install - npm install - npm name myapp
// package.json main file should not be deleted 
// javascript object notation - server language "JSON"
// return ;
// fragments react <> </> 
// import and export 
// hooks in react - usestate , reducer , useffect 

// hooks in react 


// normal function 

// named function / unnamed function

// =>()

// function



export const FormValidation = () => {

    const [firstname, setFirstName] = useState(''); // destructuring 
    const [lastname, setLastName] = useState('');

    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');




    // Event handlers to update state variables

    const handleFirstNameChange = (event) => {

        setFirstName(event.target.value);

    };

    const handleLastNameChange = (event) => {

        setLastName(event.target.value);

    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleNumberChange = (event) => {
        setNumber(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        // Prevent default form submission

        event.preventDefault();
        console.log("FirstName:", firstname);
        console.log("Lastname:", lastname);
        console.log('Email:', email);
        console.log('Phone Number:', number);
        console.log('Your Password:', password);


    };


    return (

        <div className="form-container">
            <h2>Input Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name:</label>
                    <input type="text" value={firstname} onChange={handleFirstNameChange} />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input type="text" value={lastname} onChange={handleLastNameChange} />
                </div>

                <div className="form-group">
                    <label>Phone Number:</label>
                    <input type="text" value={number} onChange={handleNumberChange} />
                </div>
                <div className="form-group">
                    <label>Eamil:</label>
                    <input type="email" value={email} onChange={handleEmailChange} />
                </div>

                <div className="form-group">
                    <label>Your Password:</label>
                    <input type="password" value={password} onChange={handlePassword} />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>

    )

    // return (
    //     <>


    //         <form>

    //             <label>First Name:
    //                 <input type="text" />
    //             </label><br></br>


    //             <label>Last Name:
    //                 <input type="text" />
    //             </label>

    //             <label><br></br>
    //                 Phone Number:
    //                 <input type="Number" />
    //             </label>

    //             <label><br></br>
    //                 Enter Email:
    //                 <input type="email" />
    //             </label>

    //             <label><br></br>
    //                 Your Password:
    //                 <input type="password" />
    //             </label><br></br>

    //             <input type="submit"></input>



    //         </form>


    //     </>



    // )
}



