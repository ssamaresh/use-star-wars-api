import React from 'react'
import { useMyHook } from '@ssamaresh1990/use-star-wars-api'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App