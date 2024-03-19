import axios from 'axios'
import { useEffect } from 'react'

const options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/timezone',
  headers: {
    'X-RapidAPI-Key': 'cb77a2275amsh67211e0194f3276p1e834ejsn68572125ef0d',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
}

const List3 = (): JSX.Element => {
  useEffect(() => {
    getSoccer()
  }, [])

  const getSoccer = async () => {
    try {
      const response = await axios.request(options)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }
}

export default List3
