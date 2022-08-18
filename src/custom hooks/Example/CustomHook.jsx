
import { useEffect } from 'react'

export default function CustomHook(props) {
    useEffect(()=>{
        document.title = props + "times "
    })
}
