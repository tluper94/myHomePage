import './home.css';
import { useState } from 'react';
import Login from '../Login/Login';

function Home() {
     const [user, setUser] = useState({});
     const [isLoggedIn, setIsLoggedIn] = useState(false);

     console.log(user, isLoggedIn);

     const displayHome = () => {
          if (isLoggedIn) {
               return <div className='home'></div>;
          } else {
               return (
                    <div className='home'>
                         <div className='login_container'>
                              <Login
                                   setUser={setUser}
                                   setLoggedIn={setIsLoggedIn}
                              ></Login>
                         </div>
                    </div>
               );
          }
     };

     return displayHome();
}

export default Home;
