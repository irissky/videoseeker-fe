import React from 'react';


function Footer() {
    return (
      <small>
        <hr />
        <p class="text-muted" style = {{textAlign:"center"}}>
            
          CS5224 VideoSeeker: Hu Xuan, Hu Yue, Lai Tiantian, Lee Thuk Chong
          
        
        </p>
      </small>
    );
  }

export default function Page() {
  return (
    <div>
      <Footer />
    </div>
  );
}