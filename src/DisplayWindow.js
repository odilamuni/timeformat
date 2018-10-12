import React from 'react';




export const DisplayWindow = (props)=>{
  let message;//message for screen readers
  let hour=props.hour//return number to define styling of window
  let display;
  

 let interactivity = props.interactivity; 



console.log(hour);

  if (hour === 12){
      message = "It's noon, sun is up high, right in the middle of the sky";
  }else if(hour === 0){
      message = "It's midnight!";
  }else if(hour===''){
      message = "Enter your time"
  }else if ((hour >= 6) && (hour <18)){
    message= "sun's up";
  }else if (hour < 6 || hour > 20){
       message = "it's dark outside";
  }else  {
      message= "sun's retiring to bed"
  };

    if(interactivity){
        display ={display: 'none'};
    }else{
        display = {display: 'block'};
    }

    return (
        <div style={display} className="Message">
            <h1 >{message}</h1>   
        </div>
        );
}