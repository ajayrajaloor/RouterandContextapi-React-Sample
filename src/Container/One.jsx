import React from 'react'
import Two from './Two'

function One(props) {
    const { data } = props;
  return (
    <div style={{backgroundColor:'red' , width:'350px'}}>
        <h1>
        Layer One
        </h1>

    <Two data= {data} ></Two>
    </div>
  )
}

export default One