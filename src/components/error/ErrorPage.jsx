import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {

    

  return (
    <div>
        <h1>ErrorPage</h1>
        <br />
        <Link to="/">
        <button>Retourner à la page d'acceuil</button>
        </Link>
    </div>
  )
}
