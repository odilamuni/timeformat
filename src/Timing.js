import React from 'react';
import { TimeUS12 } from './TimeUS12';
import { TimeUS24 } from './TimeUS24';
import { UserInputDisplay} from './UserInputDisplay';

export const Timing = (props) => {


let timeNow=props.timeNow;
let interactivity=props.interactivity;


if(!interactivity){
            if(props.format){
                return (
                    <div className='TimeDisplay shadow'>
                        <TimeUS24  timeNow = {timeNow}/>
                    </div>
                    )
            }else{
                return (
                    <div className='TimeDisplay shadow'>
                        <TimeUS12  timeNow = {timeNow}/>
                    </div>
                    )
            }
}else{
            
                return(
                    <div>
                        <UserInputDisplay/>
                    </div>
                )
            }
    }