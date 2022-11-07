import React from 'react'
import { useState } from 'react'
import { useGet } from './hooks/useGet'

const ApiCall = () => {
  const [ep, setEp] = useState("character")
  const [data, isLoading, error] = useGet(ep)
  console.log('Data en render:', data);
  if (isLoading) return <h3>Loading...</h3>
  if (error) return <h3>WTF 😫</h3>
  return (
    <div>
      <button onClick={() => setEp('character/?page=5')}>change ep</button>
      {data.results && data.results.map((char) => <p key={char.id}>{char.name} {char.status}</p>)}
    </div>
  )
}

export default ApiCall