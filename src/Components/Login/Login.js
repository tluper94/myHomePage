import './login.css';
import { useState } from 'react';
import { Input, Label } from 'reactstrap';

function Login({ setUser, setLoggedIn }) {
     const [firstName, setFirstName] = useState();
     const [lastName, setLastName] = useState();
     const [zipCode, setZipCode] = useState();

     async function submit() {
          let isValidZip = false;

          await fetch(`http://api.zippopotam.us/us/${zipCode}`)
               .then((res) => res.json())
               .then((data) => {
                    console.log(data['post code']);
                    if (data['post code']) {
                         isValidZip = true;
                    }
               });

          if ((firstName && lastName, isValidZip)) {
               setUser({
                    firstName: firstName,
                    lastName: lastName,
                    zipCode: zipCode,
               });
               setLoggedIn(true);
          } else alert('Invalid Info');
     }

     return (
          <div className='w-auto  p-3 bg-dark rounded'>
               <Label
                    className='text-light me-sm-2 fs-5 w-100 text-center'
                    for='logo'
               >
                    My Homepage
               </Label>
               <div className='mb-2 me-sm-2 mb-sm-0'>
                    <Label className='text-light me-sm-2' for='firstName'>
                         First Name
                    </Label>
                    <Input
                         id='firstname'
                         name='firstname'
                         placeholder='First Name'
                         type='name'
                         onChange={(e) => setFirstName(e.target.value)}
                    />
               </div>
               <div className='mb-2 me-sm-2 mb-sm-0'>
                    <Label className='text-light me-sm-2' for='lastName'>
                         Last Name
                    </Label>
                    <Input
                         id='lastname'
                         name='lastname'
                         placeholder='Last Name'
                         type='name'
                         onChange={(e) => setLastName(e.target.value)}
                    />
               </div>
               <div className='mb-2 me-sm-2 mb-sm-0'>
                    <Label className='text-light me-sm-2' for='zip'>
                         Zip Code
                    </Label>
                    <Input
                         id='zip'
                         name='zip'
                         placeholder='Zip Code'
                         type='text'
                         onChange={(e) => setZipCode(e.target.value)}
                    />
               </div>
               <button
                    onClick={() => submit()}
                    className='login_btn'
                    type='submit'
               >
                    Submit
               </button>
          </div>
          // <div className='login'>
          //      <div className='login_logo'>
          //           <h2>My Homepage V1</h2>
          //      </div>
          //      <div className='login_fields'>
          //           <div className='login_input_container'>
          //                <h3 className='login_input_label'>First Name</h3>
          //                <input
          //                     onChange={(e) => setFirstName(e.target.value)}
          //                     className='login_input'
          //                     placeholder='First Name'
          //                ></input>
          //           </div>
          //           <div className='login_input_container'>
          //                <h3 className='login_input_label'>Last Name</h3>
          //                <input
          //                     onChange={(e) => setLastName(e.target.value)}
          //                     className='login_input'
          //                     placeholder='Last Name'
          //                ></input>
          //           </div>
          //           <div className='login_input_container'>
          //                <h3 className='login_input_label'>Zip Code</h3>
          //                <input
          //                     onChange={(e) => setZipCode(e.target.value)}
          //                     className='login_input'
          //                     placeholder='Zip Code'
          //                ></input>
          //           </div>
          //      </div>
          //      <div className='login_btn'>
          //           <button onClick={() => submit()}>Submit</button>
          //      </div>
          // </div>
     );
}

export default Login;
