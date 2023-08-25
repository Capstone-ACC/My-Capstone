import React from 'react'
import './HomePage.css'

export default function Home() {

  function changeImage() {
    alert("test")
  }

  changeImage();

  return (
        <div className="image-container">   
         <img src="/images/homeImage.jpg" className="homePic" id="homeImage" onClick={changeImage}/>
         <button className="shopAll">Shop All</button>
         <p>Check out latest trends from clothing to technology</p>
         </div>
  )
}



