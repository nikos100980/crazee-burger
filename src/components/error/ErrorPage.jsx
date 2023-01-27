import React from 'react'

export default function ErrorPage() {

    const handleSubmit = (e) => {
        e.preventDefault();
        
        window.location = `/`
    }

  return (
    <form action='submit' onSubmit={handleSubmit}>
        <h1>ErrorPage</h1>
        <button>Retourner à la page d'acceuil</button>
    </form>
  )
}
