import logo from './logo.svg';
import './App.css';
// import Amplify, { API } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import Amplify, { API } from 'aws-amplify'
const myAPI = "videoseekerfeapi"
const path = '/videos'; 

const test_dict = {'index':
[{'name': 'THE CONTRACTOR1',
'id':5,
'description': 'Chris Pine stars in the action-packed thriller as Special Forces Sergeant James Harper, who is involuntarily discharged from the Army and cut-off from his pension. In debt, out of options and desperate to provide for his family, Harper contracts with a private underground military force. When the very first assignment goes awry, the elite soldier finds himself hunted and on the run, caught in a dangerous conspiracy and fighting to stay alive long enough to get home and uncover the true motives of those who betrayed him.',
'actor':"janny,calro",
'img':'https://images.unsplash.com/photo-1635488640163-e5f6782cda6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
'src':[0,0,1,1,0]},
{'name': 'THE CONTRACTOR2',
'id':3,
'description': 'Chris Pine stars in the action-packed thriller as Special Forces Sergeant James Harper, who is involuntarily discharged from the Army and cut-off from his pension. In debt, out of options and desperate to provide for his family, Harper contracts with a private underground military force. When the very first assignment goes awry, the elite soldier finds himself hunted and on the run, caught in a dangerous conspiracy and fighting to stay alive long enough to get home and uncover the true motives of those who betrayed him.',
'actor':"janny,calro",
'img':'https://images.unsplash.com/photo-1635488640163-e5f6782cda6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
'src':[0,1,0,1,0]}]
}

const App = () => {
  const [input, setInput] = useState("")
  const [videos, setvideos] = useState([])

  //Function to fetch from our backend and update videos array
  function getvideo(e) {
    let videoId = e.input
    API.get(myAPI, path + "/" + videoId)
       .then(response => {
          console.log(response)
          setvideos(response.index) 
          // setvideos(test_dict.index)
       })
       .catch(error => {
         console.log(error)
       })
  }

  return (
    
    <div className="App">
      <h1>VideoSeeker</h1>
      <div>
          <input placeholder="video id" type="text" value={input} onChange={(e) => setInput(e.target.value)}/>      
          <button onClick={() => getvideo({input})}>Search</button>
      </div>
      <br/>
      

      <h2 style={{visibility: videos.length > 0 ? 'visible' : 'hidden' }}>Response</h2>
      {
         <ul>
         {videos.map((data) => (
           <li key={data.id}>
          <p>{data.name}</p>
           <p>{data.description}</p>
           <p>{data.actor}</p>
           </li>
         ))}
         </ul>
      }
    </div>
  )
}

export default App;