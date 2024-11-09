import React, { useState } from 'react'
import Button from './button'
import './joke.css'

export default function Joke() {
    const [joke , setJoke] = useState("");
    const fetchApi = () =>{
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
        .then((res) => res.json())
        .then((data) => setJoke(data.joke))

    }
  return (
    <div className='jokes'>
      <Button callApi={fetchApi}/>
      <p>{joke}</p>
    </div>
  )
}
