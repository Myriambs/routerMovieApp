import React from 'react'
import { useParams } from 'react-router-dom'
import {data} from '../data'
const Trailer = () => {
console.log('data movie',data )
    const {id} =useParams()
console.log('id url', id)

// id data objet movie 
const findMovie = data.find((el)=>  el.id === Number(id)  )
console.log('moviefound',findMovie)
  return (
    <div>
        <h1> {findMovie.title}</h1>
    </div>
  )
}
export default Trailer