import React from 'react';
import { Timing } from './Timing';
import {Button} from './Button';
import {DisplayWindow} from './DisplayWindow';
import {CoolStuff} from './CoolStuff';
import { Switcher } from './Switcher';
import { HourCounter } from './hourCounter';
import {UserInputDisplay}from './UserInputDisplay';



class TimeNow extends React.Component{
    constructor(props){
        super(props);

    this.state = {
        dateTime: new Date(),
        displayedFormat: '24',
        hour: '',
        userInput: 0,
        interactive: false,
        hourType: '24',
        userHour:''
        
          }

    this.tick = this.tick.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onSwitcher = this.onSwitcher.bind(this);
    this.onChangeType=this.onChangeType.bind(this);
    this.onStepUp=this.onStepUp.bind(this);
    this.onStepDown=this.onStepDown.bind(this); 
    this.onDisplay=this.onDisplay.bind(this)  
    // binding here
}
componentDidMount() {
   this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick() {
      this.setState({
      dateTime: new Date(),
      hour: this.state.dateTime.getHours()
    });
    // console.log(this.state.interactive)
  }
onClick(){
  var format = !this.state.displayedFormat;
  this.setState({
    displayedFormat: format
  })
}  
onSwitcher(){
var interactive = !this.state.interactive;
this.setState({
  interactive: interactive,
  userInput: 0,
  })
}


onStepUp(){
  this.setState(
    { userInput: +this.state.userInput+1 },
  // ()=>console.log('userInput2 is '+ this.state.userInput)
    );
  }

onStepDown(){
    this.setState(
    { userInput: +this.state.userInput-1 },
  // ()=>console.log('userInput2 is '+ this.state.userInput)
    );
  }
onChangeType(type){
    this.setState(
      {hourType: type},
      // ()=>console.log('Hour type '+ this.state.hourType)
      );
}
onDisplay(user){
this.setState({
userHour: user
});
}
  render() {
    
    return (
      //app div ->
      <div className= 'TimeNow'>
      {/* general div */}
           
          <div className = 'Window'>
           {/* sun and moon */} 
              
                     <CoolStuff hour={this.state.hour} hourType={this.state.hourType} timeNow={this.state.dateTime} userInput={this.state.userInput} interactivity={this.state.interactive}/>
                     <DisplayWindow  hour={this.state.hour} interactivity ={this.state.interactive} userHour={this.state.userInput}/>
                    <div className="ControlPanel">
                    <HourCounter interactivity={this.state.interactive} hourType={this.state.hourType} onStepUp={this.onStepUp} onStepDown={this.onStepDown} userInput={this.state.userInput} onChangeType={this.onChangeType} />
                    <UserInputDisplay interactivity={this.state.interactive} hourType={this.state.hourType} UserInput={this.state.userInput}/>
                    <Timing timeNow = {this.state.dateTime} format = {this.state.displayedFormat} userInput={this.state.userInput} interactivity={this.state.interactive}/>
                    <Button onClick={this.onClick} interactivity={this.state.interactive} />
                    <Switcher onSwitcher={this.onSwitcher} text={this.state.interactive}/>
              </div>
          </div>
        
      </div>
    );
  }
}
export default TimeNow;