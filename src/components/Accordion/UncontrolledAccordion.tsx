import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
   // collapsed?: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendered")
let [un, setUn] = useState(true)

        return <div>
            <AccordionTitle title={props.titleValue}/> <button onClick={() => {setUn(true) && <AccordionBody/>}}>TOGGLE</button>
        </div>
    }

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendered")
    return <h3>{props.title}</h3>

}

function AccordionBody() {
    console.log("AccordionBody rendered")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}