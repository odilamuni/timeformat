import React from 'react';



export const Switcher = (props)=> {
   let text;
   if (props.text === false){
       text = "Pick a time";
   }else{
       text = "Back to current time";
   }
    return <div className="button" id="Switcher" onClick={props.onSwitcher}>{text}</div>
}