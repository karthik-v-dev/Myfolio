import React,{ useState }  from "react";
// import React from "react";


const CheckboxToggle = (props) => {
let[check,setCheck]=useState(false);
var colr =props.currentColor;
console.log(colr);
// (function(){
//  document.querySelector('.slider').style.background=colr;
// })();
const colorBlack=()=>{
      console.log(colr)
      document.body.style.background=colr ;
      document.body.style.color='white';
      document.querySelector('.slider').style.background="white";
     
}
const colorWhite=()=>{
      document.body.style.background='';
      document.body.style.color='';
      document.querySelector('.slider').style.background=colr;
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
