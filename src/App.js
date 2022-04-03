import logo from './logo.svg';
import './App.css';
// import Amplify, { API } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import Amplify, { API } from 'aws-amplify'
import Page from './nav.js';
import HeadWindow from './HeadWindow';
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
'img':'https://images.unsplash.com/photo-1648737154547-b0dfd281c51e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
'src':[0,1,0,1,0]},
{'name': 'THE CONTRACTOR3',
'id':3,
'description': 'Chris Pine stars in the action-packed thriller as Special Forces Sergeant James Harper, who is involuntarily discharged from the Army and cut-off from his pension. In debt, out of options and desperate to provide for his family, Harper contracts with a private underground military force. When the very first assignment goes awry, the elite soldier finds himself hunted and on the run, caught in a dangerous conspiracy and fighting to stay alive long enough to get home and uncover the true motives of those who betrayed him.',
'actor':"Chris Pine stars in the action-packed thriller ",
'img':'https://images.unsplash.com/photo-1648536475316-27bcbc7784e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
'src':[0,1,0,1,0]}
]
}




const App = () => {
  const [darkMode, setDarkMode] = React.useState(true);
  const [input, setInput] = useState("")
  const [videos, setvideos] = useState([])
  const [isResponse,setisResponse] = useState("")

  //Function to fetch from our backend and update videos array
  function getvideo(e) {
    let videoId = e.input
    API.get(myAPI, path + "/" + videoId)
       .then(response => {
          console.log(response)
          setvideos(response.index) 
          // setvideos(test_dict.index)//test
          setisResponse(true)
       })
       .catch(error => {
         console.log(error)
       })
  }

  return (
    
    <div className="App">
      <div class="container-fluid">
      <nav class="navbar navbar-dark ">
      <a class="navbar-brand mb-0 h1" style={{marginLeft:"1em"}}>VideoSeeker</a>
      <div class="d-flex" style={{marginRight:"18em"}} >

          <input class="form-control me-2" placeholder="video id" type="text" value={input} onChange={(e) => setInput(e.target.value)} style={{width: "40em",marginLeft:"10em"}}/>      
          <button class="btn btn-primary" onClick={() => getvideo({input})}>Search</button>
         
      </div>
      </nav>   
      </div>
      <br/>
  


    <HeadWindow/>

      <p style={{visibility: videos.length == 0 && isResponse == true? 'visible' : 'hidden',textAlign:"center"}} > Sorry, we can't find the result.</p>
      {
         <div>
         {videos.map((data) => (
           <div key={data.id}    style={{marginLeft:"10%", marginRight:"10%"}}>
             <div class="card mb-3 bg-dark text-white" >
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={data.img} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{data.name}</h5>
                    <p >actor: {data.id}</p>
                    <p class="card-text">{data.description}</p>
                    <p class="card-text"><small class="text-muted">{data.actor}</small></p>
                  </div>
                </div>
              </div>
              </div>
           </div>
         ))}
         </div>

      }
      <Page/>
    </div>
  )
}
export default App;