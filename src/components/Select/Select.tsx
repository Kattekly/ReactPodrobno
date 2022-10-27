import {inspect} from "util";
import styles from "./Select.module.css"
import {MouseEventHandler, useState} from "react";

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: Array<ItemType>
}

type ItemType = {
    title: string
    value: any
}


export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)
const [hoveredElValue, setHoveredElValue] = useState(props.value)

    const TitleItems = props.items.find(t => t.value === props.value)
    const HoveredItems = props.items.find(t => t.value === hoveredElValue)


    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }


    return (
        <>
            <div className={styles.select}>
                <span className={styles.main} onClick={toggleItems}>{TitleItems && TitleItems.title}</span>
                {active &&
                    <div className={styles.items}>
                        {props.items.map(el => <div onMouseEnter={() => {setHoveredElValue(el.value)}}
                            className={styles.item + " " + (HoveredItems === el ? styles.selected: "")}
                                                    key={el.value}
                                                    onClick={() => {
                                                        onItemClick(el.value)
                                                    }}>{el.title}</div>)}
                    </div>
                }
            </div>
        </>
    )
}
