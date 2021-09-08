import React from 'react'
import ExpenseTableRow, { DataField } from './expenseTableRow'
import * as styles from './expenseTableStyles.module.css'

export default function ExpenseTable() {
    const months: DataField[] = [{ value: '21 Aug' }, { value: '21 Aug' }, { value: '21 Aug' }, { value: '21 Aug' }, { value: '21 Aug' }, { value: '21 Aug' }, { value: '21 Aug' }]
    return (
        <div className={styles.table}>
            <ExpenseTableRow isHeader={true} data={months} />
            <div className={styles.tableBody}>
                <ExpenseTableRow data={months} />
                <ExpenseTableRow data={months} />
                <ExpenseTableRow data={months} />
                <ExpenseTableRow data={months} />
            </div>
        </div>
    )
}
