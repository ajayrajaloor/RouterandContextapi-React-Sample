import React from 'react'

function Two(props) {
    const { data } = props;
  return (
    <div style={{backgroundColor:'yellow', width:'200px'}}>
        <h1>
        Layer Two {data}
        </h1>
    </div>
  )
}

export default Two