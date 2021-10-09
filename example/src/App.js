import React from 'react'
import { useStarWarsAPI } from '@ssamaresh1990/use-star-wars-api'

const App = () => {
  const {data, loading}= useStarWarsAPI()

  if(loading) return <p>Loading...</p>

  if(data) {
    return (
      <div>
        {data}
      </div>
    )
  }
  return null;
}
export default App