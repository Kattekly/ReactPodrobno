import React, {useReducer, useState} from "react";
import {reducer} from "./Reducer";

type AccordionPropsType = {
    titleValue: string
   // collapsed?: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendered")

/*let[collapsed, setCollapsed] = useState(true)*/
let[state, dispatch] = useReducer(reducer, {collapsed: false})

        return <div>
          {/*  <AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => {dispatch({type: "TOGGLE-COLLAPSED"})}}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    }

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendered")
    return <h3 onClick={() => {props.onClick() }}>{props.title}</h3>

}

function AccordionBody() {
    console.log("AccordionBody rendered")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}