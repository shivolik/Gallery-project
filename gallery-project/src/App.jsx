import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [userdata, setUserdata] = useState([])
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=30')
    setUserdata(response.data)
    console.log(response.data)
  }
  let printUserData = 'No user available'

  if (userdata.length > 0) {
    printUserData = userdata.map(function(elem,idx){
      return (
      <div key={idx}>
        <div className= 'h-40 w-40 bg-white ovwrflow-hidden rounded-lg'>
          <img className='h-full w-full object-cover ' src={elem.download_url} alt='' />
        </div>
        <h1 className='text-center'>{elem.author}</h1>
      </div>)
    })
  }

  return (
    <div className='h-screen  bg-black text-white overflow-auto'>
      <button onClick={getData} className='bg-blue-500 p-2 rounded-lg m-4'>Get Data</button>
      <div className='flex flex-wrap gap-4 p-4'>
        {printUserData}
      </div>
    </div>
  )
}

export default App
