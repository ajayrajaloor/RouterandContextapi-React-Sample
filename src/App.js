import React from "react";
import About from "./Components/About";
import Profile from "./Components/Profile";
import { useState } from "react";
import {  Route, Routes,Link, useNavigate} from "react-router-dom"; //Route to define the endpoints & Link is used to get the routes without reloading & we use useNavigate to navigate routes through buttons
//  for doing with the buttons we need to import BrowserRouter in the index.js... for that we are going to remove from here to there   ..4..


function App() {
  const [state, setState] = useState("");
  const navigate = useNavigate()

  // let component;
  // if(state === 'about') {
  //   component =   <About></About>
  // }
  // if(state === 'profile'){
  //   component = <Profile></Profile>
  // }   //we don't need to write it anymore coz we started using the React Router  ..1..

  return (
    <div className="App">

   

      {/* <button onClick={() => setState('about')}>About</button>
      <button onClick={() => setState('profile')}>Profile</button>    ..2.. */}

      {/* {component} */} {/* same as the above if condition reason      ..1.. */}

      {/* <Router>        by moving the BrowserRouter to the index.js we don't need to use Router here anymore. it is there in index.js where the App is wrapped up in the Router    ..4.. */}
      {/* <Link to='/about'>About</Link>
      <br />
      <Link to='/profile'>Profile</Link>     ..3..  */}


      <button onClick={() => navigate('/about')} >About</button>
      <button onClick={() => navigate('/profile')} >Profile</button>

        <Routes> {/* it is a container which is a must use container to wrap the all Route  */}
          <Route Component={About} path='/about' />
          {/* here we first try to get the About component while typing the path as endpoint write inside the Route... we can also write in another way */}
          <Route Component={Profile} path="/profile"/> 
          <Route render/>
        </Routes>


      {/* </Router>     ..4..*/}
    </div>
  );

}

export default App;
