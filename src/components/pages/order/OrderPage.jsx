import React from 'react'
import { useParams } from 'react-router-dom'


export default function OrderPage() {

  const {id}= useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    window.location = `/`
    
  };


  return (
    <form action='submit' onSubmit={handleSubmit}>
      <h1>
        Bonjour {id}
      </h1>
      <br />
      <button>Deconnexion</button>
    </form>
  )
}
