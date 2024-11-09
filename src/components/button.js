import React from 'react'
import './button.css'

export default function Button(props) {
  return (
    <div>
      <button onClick={props.callApi}>Click to Generator the joke</button>
    </div>
  )
}
