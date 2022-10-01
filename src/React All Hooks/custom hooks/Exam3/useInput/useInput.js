import { useState } from 'react'

export default function useInput(initialValue) {
   const [first, setFirst] = useState(initialValue);

   const reset = () => {
      setFirst(initialValue)
   }
   const bind = {
      first,
      onchange: e => {
         setFirst(e.target.value)
      }
   }
   return [first, bind, reset]
}
