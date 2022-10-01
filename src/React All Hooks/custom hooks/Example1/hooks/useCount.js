import {useState} from 'react'

export default function useCount() {
    const [count, setCount] = useState(0);

    const increHandler = () => {
        setCount(count + 1)

    }
  return{
    count,
    increHandler
  }
}
