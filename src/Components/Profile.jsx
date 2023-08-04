import React from 'react'
import One from '../Container/One'

function Profile(props) {
    const { data } = props;
  return (
    <div style={{backgroundColor:'blue',width:'500px'}}>

   <h1>Profile</h1>
   
   <One data={data}></One>
    </div>
  )
}

export default Profile