import React from 'react';
import "./toggle.css";



export class Button extends React.Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this);
    }
    
    
    
    handleClick(){
        if(document.getElementById('option').checked){
        this.props.onClick();
      }
    }
render (){
    let interactivity = this.props.interactivity;
    let display;
        if(interactivity){
                display={display: 'none'}
            }else{
                display={display: 'flex'};
            }
     return (
         //this.handleClick on label prevents user to toggle clicking everywhere on the form
        <form style={display} className="Form">
        <span className = "format">24</span>
         <label className="switch" onClick = {this.handleClick}>
         <input id="option" value={24} type="checkbox"/>
         <span className="slider round" ></span>
         </label>
        <span className = "format">AM/PM</span>
    </form>
        
      );
    }
    }
      
      
 
   
 
