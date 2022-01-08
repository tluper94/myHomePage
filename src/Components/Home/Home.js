import './home.css';
import { useState } from 'react';
import Login from '../Login/Login';
import Weather from '../Weather/Weather';
import Draggable from 'react-draggable';

function Home() {
     const [user, setUser] = useState({});
     const [isLoggedIn, setIsLoggedIn] = useState(false);
     const [activeDrags, setactiveDrags] = useState(0);

     const onStart = () => {
          setactiveDrags(activeDrags + 1);
     };

     const onStop = () => {
          setactiveDrags(activeDrags - 1);
     };

     console.log(user, isLoggedIn);

     const displayHome = () => {
          let dragHandlers = { onStart: onStart, onStop: onStop };
          if (isLoggedIn) {
               return (
                    <div className='home'>
                         <Draggable {...dragHandlers}>
                              <Weather></Weather>
                         </Draggable>
                    </div>
               );
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
