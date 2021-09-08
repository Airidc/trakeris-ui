import React, { CSSProperties } from 'react'
import * as styles from './progressBarStyles.module.css'

export interface ProgressBarSettings {
    progressColor?: string;
    goalColor?: string;
    height?: number;
}

export interface ProgressBarProps {
    value: number;
    goal: number;
    settings?: ProgressBarSettings
}

export default function ProgressBar({ value, goal, settings }: ProgressBarProps) {
    const getPercentage = (v: number, g: number): number => {
        const result = (v / g) * 100;
        const num = result.toFixed(2);
        return parseFloat(num);
    }

    const percentage = getPercentage(value, goal);
    const containerBackground: CSSProperties = {
        backgroundColor: settings?.goalColor || 'rgb(92 116 140 / 43%)',
        height: settings?.height || '15px',
        borderRadius: '15px'
    }

    const progressBackground: CSSProperties = {
        backgroundColor: settings?.progressColor || "#a1bd43",
        width: percentage + "%",
        height: "inherit",
        borderRadius: '15px',
        zIndex: 2
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.textContainer}>
                <span className={styles.percentageText}>{percentage}% of target reached</span>
                <span className={styles.percentageText}>{value} / {goal}</span>
            </div>
            <div className={styles.container} style={containerBackground}>
                <div style={progressBackground}></div>
            </div >
        </div>
    )
}
