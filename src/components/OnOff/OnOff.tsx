import React, {useState} from 'react';
import s from "./OnOFF.module.css"

type  OnOffType = {
    on: boolean
    onCange: (on: boolean) => void
}

function OnOff(props: OnOffType) {
    console.log('OnOff render')

    console.log('on: ' + props.on)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return <div>
        <div style={onStyle} onClick={() => {props.onCange(true)}}>On</div>
        <div style={offStyle} onClick={() => {props.onCange(false)}}>Off</div>
        <div style={indicatorStyle}></div>
    </div>
}

/*
const OnOff = (props: OnOffType) => {
    return (
        <div className={s.item}>
            <span className={s.on}> <button>On</button> </span>
            <span className={s.off}> <button>Off</button> </span>
        </div>
    );
};

export const OnOff1 = (props: OnOffType) => {
    if (props.call === true)
    return (
<div className={s.item}>
<span className={s.on}> <button>On</button> </span>
<span> <button>Off</button> </span>
<span className={s.circle1}> <button></button> </span>
</div>)

    else {
        return <div className={s.item}>
            <span> <button>On</button> </span>
            <span className={s.off}> <button>Off</button> </span>
            <span className={s.circle2}> <button></button> </span>
        </div>
    }
}*/

export default OnOff;