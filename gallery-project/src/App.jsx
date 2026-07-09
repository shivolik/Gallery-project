import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const App = () => {
  const [userdata, setUserdata] = useState([])
  const [index, setindex] = useState(1)
  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserdata(response.data)
    console.log(response.data)
  }
useEffect (function() {
  getData()
}, [index])

  let printUserData = 'Loading...'

  if (userdata.length > 0) {
    printUserData = userdata.map(function(elem,idx){
      return (
      <a href={elem.download_url} target='_blank' rel='noreferrer'>
        <div key={idx}>
        <div className= 'h-40 w-40 bg-white ovwrflow-hidden rounded-lg'>
          <img className='h-full w-full object-cover ' src={elem.download_url} alt='' />
        </div>
        <h1 className='text-center'>{elem.author}</h1>
      </div>
      </a>)
    })
  }

  return (
    <div className='h-screen  bg-black text-white overflow-auto'>
      
      <div className='flex flex-wrap gap-4 p-4'>
        {printUserData}
      </div>
      
      <div className='flex justify-center items-center p-4'>
        <button className='bg-amber-400 text-black px-4 py-2 rounded-lg cursor-pointer active:scale-95'
          onClick={()=>{
            if(index > 1){
              setindex(index - 1)
            }
          setUserdata([])
              
          }}>Prev
        
        </button>
        <h1 className='felx  flex justify-content bg-black rounded-b-lg p-4'>Page {index} </h1>
        <button className='bg-amber-400 text-black px-4 py-2 rounded-lg mx-4 cursor-pointer active:scale-95'
            onClick={()=>{
              setindex(index + 1)
              setUserdata([])
            }}>Next
        </button>
      </div>
    </div>
  )
}

export default App
