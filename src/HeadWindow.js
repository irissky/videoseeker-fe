import React from 'react';


function Headw() {
    return (
        <div id="demo" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>
        
        
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://images.justwatch.com/backdrop/8576722/s1920/xin-shi-ji-fu-er-mo-si.webp" class="d-block"/>
            <div class="carousel-caption">
                <h1>Sherlock</h1>
                <p>Drama , Mystery & Thriller , Crime , Made in Europe</p>
            </div>
            
          </div>
          <div class="carousel-item">
            <img src="https://images.justwatch.com/backdrop/256278846/s1920/e-stata-la-mano-di-dio.webp"/>
            <div class="carousel-caption">
                <h1>The hand of god</h1>
                <p>È stata la mano di Dio</p>
            </div>
          
          </div>
          <div class="carousel-item">
            <img src="https://images.justwatch.com/backdrop/262562695/s1920/through-my-window.webp" alt="New York" class="d-block" />
            <div class="carousel-caption">
                <h3>Through my window</h3>
                <p>A través de mi ventana</p>
            </div>
          
          </div>
        </div>
        
        
        <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    );
  }

export default function HeadWindow() {
  return (
    <div>
      <Headw />
    </div>
  );
}