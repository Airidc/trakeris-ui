import React, { ReactElement, useEffect, useRef } from 'react'
import * as styles from './circularProgressStyles.module.css'

export interface CircularProgressBarProps {
    value: number;
    to: number;
    label: string;
}

export default function CircularProgressBar({ value, to, label }: CircularProgressBarProps): ReactElement {
    const circle = useRef<SVGCircleElement>(null);
    const wrapper = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log("Circle:", circle);
        let temp_value = value;
        let temp_to = to;
        let temp_pct = (temp_value / temp_to) * 100;
        console.log(temp_pct)
        if (circle === null || circle.current === null) {
            return;
        };

        if (isNaN(temp_pct)) {
            temp_pct = 100;
        }
        else {
            const r = parseFloat(circle.current.getAttribute('r') as string);
            const c = Math.PI * (r * 2);

            if (temp_pct < 0) { temp_pct = 0; }
            if (temp_pct > 100) { temp_pct = 100; }
            if (temp_pct > 3 && temp_pct < 97) { temp_pct = temp_pct - 3 }
            if (temp_pct > 97 && temp_pct < 100) { temp_pct = temp_pct - 1 }

            const pct = ((100 - temp_pct) / 100) * c;

            circle.current.style.strokeDashoffset = pct.toString();

            let percentage = temp_pct.toString().slice(0, 4);
            if (percentage.endsWith("0")) {
                percentage = percentage.slice(0, -1);
            }

            wrapper.current?.setAttribute('data-percentage', percentage);
        }
    }, [value, to, circle]);


    return (
        <div ref={wrapper} className={styles.circularProgressWrapper} data-percentage={0} data-label={label}>
            <svg id={styles.svg} width="200" height="200" view-port="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle className={styles.circle} r="90" cx="100" cy="100" fill="transparent" strokeDasharray="565.48" strokeDashoffset="0"></circle>
                <circle className={styles.circle} ref={circle} id={styles.bar} r="90" cx="100" cy="100" fill="transparent" strokeLinecap="round" strokeDasharray="565.48" strokeDashoffset="0"></circle>
            </svg>
            <span className={styles.circularProgressValues}>{value}/{to}</span>
            <span className={styles.circularProgressLabel}>{label}</span>
        </div>
    )
}