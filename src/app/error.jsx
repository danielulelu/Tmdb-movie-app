'use client'
import { useEffect } from 'react'

export default function Error({error, reset}) { // Capitalized component name
    useEffect(() => {
      console.log(error);
    }, [error]);
    
  return (
    <div className="text-center mt-10">
    <h1>Something went wrong. Please try again.</h1>
    <button className="hover:text-blue-500" onClick={() => reset()}>Try again.</button>
    </div>

  )
}
