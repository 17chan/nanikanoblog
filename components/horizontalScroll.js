import React, { Component } from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import styles from "./horizontal.module.css";
export default function ScrollingHorizontally() {

    const parent  = { width: `100%`, height: `50vh`, display: `block`}
    const child = { width: `100vw`, height: `100px`, color: `red`, backgroundcolor:`blue` }
    return (
        <div style={parent} className={styles.parent}>
            <HorizontalScroll reverseScroll = {true}  animValues= {100}>
                <div style={child} className={styles.child}> aaa</div>
                <div style={child} className={styles.child}> aaa</div>
                <div style={child} className={styles.child}> aaa</div>
            </HorizontalScroll>
        </div>

    )

}