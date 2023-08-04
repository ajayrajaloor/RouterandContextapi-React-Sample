import React from "react";
import About from "./Components/About";
import Profile from "./Components/Profile";
import { useState } from "react";
import {  Route, Routes,Link, useNavigate} from "react-router-dom"; 
import { AppContext } from "./AppContext";

function App() {
 
  const [state,setState] = useState(11)
  const navigate = useNavigate()
  

  return (
    <div className="App">

   

      <button onClick={() => navigate('/about')} >About</button>
      <button onClick={() => navigate('/profile')} >Profile</button>

        <AppContext.Provider value={{data:state}}>

        <Routes> 
          <Route Component={About} path='/about' />  
          <Route path="/profile" element={<Profile data={state}/>} />
        </Routes>

        </AppContext.Provider>
     


      
    </div>
  );

}

export default App;
