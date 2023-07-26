import { useEffect, useState } from "react"

export default function App() {

  const serverURL = 'http://localhost:8080'

  const [json, setJson] = useState('recieving json')

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await fetch(`${serverURL}`)
    console.log(res)
  }

  return (
    <>
      <div>frontend</div>  
      <p>does reload work?</p>  
    </>
  )
}