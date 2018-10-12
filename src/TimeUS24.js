import React from 'react';

export const TimeUS24 = (props) => {

let timeNow = props.timeNow;

Number.prototype.pad = function (len) {
    return (new Array(len+1).join("0") + this).slice(-len);
}
let us24hr = timeNow.getHours();
let us24mi = timeNow.getMinutes().pad(2);
let us24se = timeNow.getSeconds().pad(2);



return (
    <div className="HourDisplay">
        <div className="HR">{us24hr}:</div>
        <div className="MI">{us24mi}</div>
        <div className="SE">{us24se}</div>
    </div>
    );

}