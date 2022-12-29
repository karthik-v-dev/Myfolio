import React,{ useState }  from "react";
// import React from "react";


const CheckboxToggle = (props) => {
let[check,setCheck]=useState(false);
var colr =props.currentColor;
// console.log(colr.split('')[14]+colr.split('')[15])
 console.log(colr.split('')[4]+colr.split('')[5]+colr.split('')[6])
// console.log(colr);
// (function(){
//  document.querySelector('.slider').style.background=colr;
// })();
const colorBlack=()=>{
  // console.log(colr.split('')[14]+colr.split('')[15]<=80)
  // console.log( colr.split('')[14]+colr.split('')[15]>9)
  // console.log(colr.split('')[4]+colr.split('')[5]+colr.split('')[6]>180)
  if(window.confirm('If you want to apply background color to only content')){
    document.querySelector('.containerhead').style.backgroundColor=colr;
  }
  else{
    document.querySelector('.containerhead').style.backgroundColor='';
      // document.querySelector('.side_body').style.backgroundColor=colr;
  }
  document.querySelector('.side_body').style.backgroundColor=colr;
      // document.querySelector('.side_body').style.color="white";
      if(colr.split('')[14]+colr.split('')[15]>=80 || colr.split('')[14]+colr.split('')[15]<11 ){
        document.querySelector('.side_body').style.color="black";
      }else if((colr.split('')[4]+colr.split('')[5]+colr.split('')[6]<100 ||colr.split('')[4]+colr.split('')[5]+colr.split('')[6]<11) && colr.split('')[14]+colr.split('')[15]>=80 ){
        document.querySelector('.side_body').style.color="black";
      }
        else{
        document.querySelector('.side_body').style.color="white";
      }
      
      // document.body.style.background=colr ;
      document.querySelector('.slider').style.background="white";
      // document.body.style.color='white';
      
     
}
const colorWhite=()=>{
      // document.body.style.background='';
      // document.body.style.color='';
      
      if(document.querySelector('.side_body')!== null){
      document.querySelector('.side_body').style.background='';
      document.querySelector('.side_body').style.color="";
      document.querySelector('.containerhead').style.backgroundColor='';
      }
      if(document.querySelector('.slider')!== null)
      {document.querySelector('.slider').style.background = colr;}
}
return(
  <>
  
    <label className="toggle">
      <input type="checkbox" checked={check} onClick={()=>setCheck(!check)}/>
      <span className="slider rounded"></span>
      
    </label>
    
   <span onClick={check?colorBlack():colorWhite()}></span>
 
  
  </>
)}

export default CheckboxToggle;
