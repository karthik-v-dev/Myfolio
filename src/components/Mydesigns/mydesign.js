import React from 'react'
import myfolio from './myfolioplain.png';
export default function Mydesign() {
  return (
    <div className='F-mydesign F'>
      <div class="ui segment">
  <div class="ui two column very relaxed grid">
    <div class="column my-slide">
     <img src={myfolio} alt='MyFolio'/>
    </div>
    <div class="column my-slide">
    <h1>MYFOLIO</h1>
    <p>"As I said, i'm very quiet, i don't go around saying "I'm awesome!" but when I brought in my portfolio into DreamWorks and showed them what I could do, my art style is a lot wilder than I am." ~ <span className='olive'>KARTHIK VOORUGONDA</span></p>
    <button className='ui yellow button'>CASE STUDY</button>
    </div>
  </div>
  <div class="ui vertical divider">
  <i class="hand point right icon"></i>
  </div>
  </div>
    </div>
    
  )
}
