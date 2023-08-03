import React from "react";
import About from "./Components/About";
import Profile from "./Components/Profile";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; //Route to define the endpoints

function App() {
  const [state, setState] = useState("");

  // let component;
  // if(state === 'about') {
  //   component =   <About></About>
  // }
  // if(state === 'profile'){
  //   component = <Profile></Profile>
  // }   //we don't need to write it anymore coz we started using the React Router

  return (
    <div className="App">
      <button onClick={() => setState('about')}>About</button>
      <button onClick={() => setState('profile')}>Profile</button>
      {/* {component} */} {/* same as the above if condition reason */}
      <Router>
        <Routes> {/* it is a container which is a must use container to wrap the all Route  */}
          <Route Component={About} path='/about' />
          {/* here we first try to get the About component while typing the path as endpoint write inside the Route... we can also write in another way */}
          <Route Component={Profile} path="/profile"/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
