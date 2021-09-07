import React from 'react'
import * as styles from './expenseTableStyles.module.css'

export default function ExpenseTable() {
    return (
        <div className={styles.table}>
            <div className={styles.tableHeader}>
                <div className="month">Type</div>
                <div className="name">Name</div>
                <div className="month ">2021 August</div>
                <div className="month ">2021 September</div>
                <div className="month ">2021 October</div>
                <div className="month ">2021 November</div>
                <div className="month ">2021 December</div>
            </div>
            <div className={styles.tableBody}>
                <div className={styles.tableRow}>
                    <div className={`${styles.cell}`}>Income</div>
                    <div className={`${styles.cell}`}>Maistas</div>
                    <div className={`${styles.cell}`}>420€</div>
                    <div className={`${styles.cell}`}>420€</div>
                    <div className={`${styles.cell}`}>420€</div>
                    <div className={`${styles.cell}`}>420€</div>
                    <div className={`${styles.cell}`}>420€</div>
                </div>
                <div className={styles.tableRow}>
                    <div className={`${styles.cell}`}>Income</div>
                    <div className={`${styles.cell}`}>Maistas</div>
                    <div className={`${styles.cell}`}>420€</div>
                    <div className={`${styles.cell}`}>420€</div>
                    <div className={`${styles.cell}`}>420€</div>
                    <div className={`${styles.cell}`}>420€</div>
                    <div className={`${styles.cell}`}>420€</div>
                </div>
                <div className={styles.tableRow}>
                    <div className={`${styles.cell}`}>Income</div>
                    <div className={`${styles.cell}`}>Maistas</div>
                    <div className={`${styles.cell}`}>420€</div>
                    <div className={`${styles.cell}`}>420€</div>
                    <div className={`${styles.cell}`}>420€</div>
                    <div className={`${styles.cell}`}>420€</div>
                    <div className={`${styles.cell}`}>420€</div>
                </div>
                <div className={styles.tableRow}>
                    <div className={`${styles.cell}`}>Income</div>
                    <div className={`${styles.cell}`}>Maistas</div>
                    <div className={`${styles.cell}`}>420€</div>
                    <div className={`${styles.cell}`}>420€</div>
                    <div className={`${styles.cell}`}>420€</div>
                    <div className={`${styles.cell}`}>420€</div>
                    <div className={`${styles.cell}`}>420€</div>
                </div>
            </div>
        </div>
    )
}
