import './login.css';
import { useState } from 'react';

function Login({ setUser, setLoggedIn }) {
     const [firstName, setFirstName] = useState();
     const [lastName, setLastName] = useState();
     const [zipCode, setZipCode] = useState();

     console.log('First:', firstName, 'Last:', lastName, 'Zip:', zipCode);

     function submit() {
          var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(Number(zipCode));
          if (firstName && lastName, isValidZip) {
               setUser({
                    firstName: firstName,
                    lastName: lastName,
                    zipCode: zipCode,
               });
               setLoggedIn(true);     
          } else (
               alert('Invalid Info')
          )
     }

     return (
          <div className='login'>
               <div className='login_logo'>
                    <h2>My Homepage V1</h2>
               </div>
               <div className='login_fields'>
                    <div className='login_input_container'>
                         <h3 className='login_input_label'>First Name</h3>
                         <input
                              onChange={(e) => setFirstName(e.target.value)}
                              className='login_input'
                              placeholder='First Name'
                         ></input>
                    </div>
                    <div className='login_input_container'>
                         <h3 className='login_input_label'>Last Name</h3>
                         <input
                              onChange={(e) => setLastName(e.target.value)}
                              className='login_input'
                              placeholder='Last Name'
                         ></input>
                    </div>
                    <div className='login_input_container'>
                         <h3 className='login_input_label'>Zip Code</h3>
                         <input
                              onChange={(e) => setZipCode(e.target.value)}
                              className='login_input'
                              placeholder='Zip Code'
                         ></input>
                    </div>
                    <div>
                         <button onClick={() => submit()} className='login_btn'>
                              Submit
                         </button>
                    </div>
               </div>
          </div>
     );
}

export default Login;
