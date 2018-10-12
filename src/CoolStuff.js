import React from 'react';
// import {styleTest} from './StyleTest';
import {ICONARRAY} from './IconArray';

export const CoolStuff = (props)=>{

let hour;
let hourType = props.hourType;
let interactivity=props.interactivity;
let hourToDisplay;

if(!interactivity){
hour=props.hour;
hourToDisplay=ICONARRAY[hour];
return (
    <div id='Stars' >
    <img id='imgDisplayed' src={hourToDisplay} alt="Sun or moon"/>
    </div>
    );
}else{
hour=props.userInput;
// hourToDisplay=ICONARRAY[hour];
    if(((hourType==="AM")||(hourType==="PM"))&&((hour>12)||(hour<1))){
        
        return<div>Oops</div>;
    
    }else if((hour>23)||(hour<0)){
        return<div>Oops</div>;
    }else if((hourType==="AM")&&(hour===12)){
        hour=hour-12;
        hourToDisplay=ICONARRAY[hour];
    }else if((hourType==="AM")&&(hour<12)){
        hourToDisplay=ICONARRAY[hour];
    }else if(hourType==="PM"){
       hour=hour+12;
       hourToDisplay=ICONARRAY[hour];
    }else if(hourType==="24"){
        hourToDisplay=ICONARRAY[hour];
    }else{
        return<div>Oops</div>;
    }

    return (
        <div id='Stars'>
            
            <img  id='imgDisplayed' src={hourToDisplay} alt="Sun or moon"/>
            
        </div>
    );
}

}