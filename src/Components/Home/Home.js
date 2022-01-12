import './home.css';
import { useState } from 'react';
import Login from '../Login/Login';
import Weather from '../Weather/Weather';
import Draggable from 'react-draggable';
import TopBar from '../TopBar/TopBar';
import Dock from '../Dock/Dock';

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

     const displayHome = () => {
          let dragHandlers = {
               onStart: onStart,
               onStop: onStop,
               bounds: '.home',
          };
          if (isLoggedIn) {
               return (
                    <div className='home'>
                         <TopBar></TopBar>
                         <div className='content_container'>
                              <div className='home_greeting'>
                                   <h1>{`Grettings ${user.firstName}`}</h1>
                              </div>
                              <Draggable {...dragHandlers}>
                                   <Weather user={user}></Weather>
                              </Draggable>
                         </div>
                         <Dock></Dock>
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
