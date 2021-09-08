import React from 'react'
import * as styles from "./expenseTableStyles.module.css"

export interface DataField {
    value: string | number;
}

export interface ExpenseTableRowProps {
    isHeader?: boolean,
    data: DataField[]
}

export default function ExpenseTableRow(props: ExpenseTableRowProps) {
    return (
        <div className={` ${styles.tableRow} ${props.isHeader ? styles.tableHeader : ''}`}>
            {props.data.map((data, i) => <div key={i} className={`${styles.cell}`}>{data.value}</div>)}
        </div>
    )
}
