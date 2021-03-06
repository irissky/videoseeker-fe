import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import Amplify, { API ,Auth} from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Page from './nav.js';
import HeadWindow from './HeadWindow';
import { Icon } from '@iconify/react';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
const myAPI = "videoseekerfeapi"
const path = '/videos'; 

function App({ signOut, user })  {
  const [input, setInput] = useState("")
  const [videos, setvideos] = useState([])
  
  //Function to fetch from our backend and update videos array
  function getvideo(e) {
    let videoId = e.input
    document.getElementById('kw').value=''
    API.get(myAPI, path + "/" + videoId)
       .then(response => {
          console.log(response)
          setvideos(response.index) 
          document.getElementById('kw').value=''
       })
       .catch(error => {
         console.log(error)
       })
  }

  return (

    <div className="App">
      <div class="container-fluid">
        <nav class="navbar navbar-dark ">
          <p class=" display-5 text-warning" style={{marginLeft:"1em"}}><em><strong>VideoSeeker</strong></em></p>
          <div class="d-flex" style={{marginRight:"5%"}} >
            <input id = "kw" class="form-control me-2" placeholder="video name" type="text" value={input} onChange={(e) => setInput(e.target.value)} style={{width: "20em",marginLeft:"10em"}}/>      
            <button class="btn btn-secondary active" type="reset" onClick={() => getvideo({input})}>Search</button>
            <button class = "btn btn-secondary active" onClick={signOut} style = {{marginLeft : "1%"}}>logout</button>
          </div>
        </nav>   
      </div>
    
      <br/>
      
    <HeadWindow/>
      <br/>
      {
         <div  style={{display: videos.length != 0 ? 'block' : 'none',textAlign:"center"}}>
         {videos.map((data) => (
           <div key={data.id}    style={{marginLeft:"10%", marginRight:"10%"}}>
             <div class="card mb-3 bg-dark text-white" >
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={data.img}  class="card-img-top embed-responsive-item" alt="..." />
                  <p style = {{display: data.rotten_tomato.length == 0 ? 'none' : 'block'}}><Icon icon="fxemoji:tomato" /><small class="text-warining "> {data.rotten_tomato.split("/")[0]}</small><small class="text-secondary ">/{data.rotten_tomato.split("/")[1]}</small></p>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title h2 text-warning" style={{textAlign:"left"}}> {data.name} </h5>
                    <p class = "card-text " style={{display: data.actor.length == 0 ? 'none' : 'block', textAlign:"left"}}><b class = "text-capitalize">actor:</b>  <small class="text-muted "> {data.actor.replaceAll("/",", ").slice(0,-2)}</small></p>
                    <p class="card-text " style = {{display: data.year.length == 0 ? 'none' : 'block',textAlign:"left"}}> <b class = "text-capitalize">Year: </b>  <small class="text-muted "> {data.year} </small></p>
                    <p class="card-text " style = {{display: data.age.length == 0 ? 'none' : 'block',textAlign:"left"}}> <b class = "text-capitalize">age restriction: </b>  <small class="text-muted "> {data.age} </small></p>

                    <p class="card-text "style={{textAlign:"left", display: data.description.length == 0 ? 'none' : 'block'}}><b class = "text-capitalize">description: </b> <i class = "text-secondary"> {data.description}</i ></p>
                    

                    <p class="card-text h6 text-warning" style={{textAlign:"left"}}>GO AND WATCH</p>
                    <ul class="list-group list-group-horizontal bg-transparent">
                      <li class="list-group-item bg-transparent" style={{display: data.src[0] == 1? 'block' : 'none'}}><a href='https://www.netflix.com/'><Icon icon="logos:netflix"/></a> <br/></li>
                      <li class="list-group-item bg-transparent" style={{display: data.src[1] == 1? 'block' : 'none'}}><a  href={'https://www.youtube.com/results?search_query=' + data.name}><Icon icon="logos:youtube-icon" /></a></li>
                      <li class="list-group-item bg-transparent" style={{display: data.src[2] == 1? 'block' : 'none'}}><a href = "https://www.hulu.com/"><Icon icon="cib:hulu" /></a></li>
                      <li class="list-group-item bg-transparent" style={{display: data.src[3] == 1? 'block' : 'none'}}><a  href='https://www.primevideo.com/'><Icon icon="simple-icons:prime" width="50" height="50" /></a></li>
                      <li class="list-group-item bg-transparent" style={{display: data.src[4] == 1? 'block' : 'none'}}><a href = "https://www.disneyplus.com/"><Icon icon="arcticons:disney" width="50" height="50" /></a></li>
                
                    </ul>
                  </div>
                </div>
              </div>
              </div>
           </div>
         ))}
         
         </div>
        
      }
      <p class = "text-warning" style={{textAlign:"center"}}> Get <b class = "text-white">{input}</b> from google <a href = {"https://www.google.com/search?q=" + input}> <Icon icon="akar-icons:google-contained-fill" /></a></p>
      <Page/>
    </div>
  )
}
export default withAuthenticator(App);