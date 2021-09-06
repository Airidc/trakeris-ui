import React from 'react'
import * as styles from "./quickOverviewStyles.module.css"


export default function QuickOverview() {
    return (
        <div className={styles.quickOverview}>
            <div className={styles.quickOverviewCard}>
                <span className={styles.quickOverviewCardTitle}>Income</span>
                <span className={styles.quickOverviewCardValue}>2,239 €</span>
            </div>
            <div className={styles.quickOverviewCard}>
                <span className={styles.quickOverviewCardTitle}>Expenses</span>
                <span className={styles.quickOverviewCardValue}>2,239 €</span>
            </div>
            <div className={styles.quickOverviewCard}>
                <span className={styles.quickOverviewCardTitle}>Savings</span>
                <span className={styles.quickOverviewCardValue}>2,239 €</span>
            </div>
            <div className={styles.quickOverviewCard}>
                <span className={styles.quickOverviewCardTitle}>Most Spent</span>
                <span className={styles.quickOverviewCardValue}>Maistas</span>
            </div>
            <div className={styles.quickOverviewCard}>
                <span className={styles.quickOverviewCardTitle}>Investments</span>
                <span className={styles.quickOverviewCardValue}>24,039 €</span>
            </div>
        </div>
    )
}
