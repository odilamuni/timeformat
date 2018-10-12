import React from 'react';

const FROM24TO12=[
    "12:00 AM", "1:00 AM", "2:00 AM","3:00 AM", "4:00 AM", "5:00 AM","6:00 AM", "7:00 AM", "8:00 AM","9:00 AM", "10:00 AM", "11:00 AM","12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"
]
const FROM12AMTO24=[
    "--", "1:00 hrs", "2:00 hrs","3:00 hrs", "4:00 hrs", "5:00 hrs","6:00 hrs", "7:00 hrs", "8:00 hrs","9:00 hrs", "10:00 hrs", "11:00 hrs", "00:00 hrs"
]
const FROM12PMTO24=[
    "--", "13:00 hrs", "14:00 hrs","15:00 hrs", "16:00 hrs", "17:00 hrs","18:00 hrs", "19:00 hrs", "20:00 hrs","21:00 hrs", "22:00 hrs", "23:00 hrs", "12:00 hrs"
]

export const UserInputDisplay = (props) => {
let userInput = props.UserInput;
let hourType = props.hourType;
let userInputDisplay;
let display;
let interactivity = props.interactivity;

if(((hourType==="AM")||(hourType==="PM"))&&((userInput>12)||(userInput<1))){
    userInputDisplay="Must be between 1-12";
}else if((userInput>23)||(userInput<0)){
    userInputDisplay="Must be between 0 and 23";
}else if(hourType==="24"){
    userInputDisplay=FROM24TO12[userInput];
}else if(hourType==="AM"){
    userInputDisplay=FROM12AMTO24[userInput];
}else{
    userInputDisplay=FROM12PMTO24[userInput];
};
         
if(interactivity){
                    display={display: 'block'}
                }else{
                    display={display: 'none'};
                };

return(
    <div style={display}>
       <div className="TimeDisplay shadow"> {userInputDisplay}</div>
    </div>
);
}