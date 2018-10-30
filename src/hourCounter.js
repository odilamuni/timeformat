import React from 'react';
import arrow from './Icons-flecha.png';


export class HourCounter extends React.Component {
constructor(props){
    super(props);
    
    this.handleChange=this.handleChange.bind(this);
    
}
  
   
    
    handleChange(e){
        const hrType = e.target.value;
        this.props.onChangeType(hrType);
        }
       
       

    render(){
        let interactivity = this.props.interactivity;
        let display;
            if(interactivity){
                    display={display: 'block'}
                }else{
                    display={display: 'none'};
                }
        
        return (
        <div id="hourCounter" style={display}>
            <div id="number-input">
                <div className="button counter"  onClick={this.props.onStepDown}><span>-</span></div>
                
                <div className="shadow" id="input"  value={this.props.userInput} type="number">{this.props.userInput}:00</div>
                
                <div id="options">
                    <select id="hour-type" className="shadow" onChange={this.handleChange}>
                        <option value="24">24</option>
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                    </select>
                 </div>
                <div className="button counter" onClick={this.props.onStepUp}><span>+</span></div>
                   
            </div><img id="arrow" src={arrow} alt="arrow-down"/> </div>
              );
        }
}