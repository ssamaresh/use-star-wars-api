# @ssamaresh1990/use-star-wars-api

> A custom react hook that provides Star Wars Data

[![NPM](https://img.shields.io/npm/v/@ssamaresh1990/use-star-wars-api.svg)](https://www.npmjs.com/package/@ssamaresh1990/use-star-wars-api) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @ssamaresh1990/use-star-wars-api
```

## Usage

```jsx
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
```

## License

MIT © [ssamaresh](https://github.com/ssamaresh)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
