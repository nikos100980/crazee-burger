import React from 'react'
import { Link, useParams } from 'react-router-dom'


export default function OrderPage() {

  const {username}= useParams();

  


  return (
    <div>
      <h1>
        Bonjour {username}
      </h1>
      <br />
      <Link to= "/">
      <button>Deconnexion</button>
      </Link>
    </div>
  )
}
