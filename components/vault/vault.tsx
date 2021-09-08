import React from 'react'
import ProgressBar from '../progress-bar/progressBar'
import * as styles from "./vaultStyles.module.css"

export default function Vault(vault: any) {
    vault = {
        id: 'asfag-asg-ag44-4dgsdsg',
        name: "Lunch money investavimui",
        amount: 4531,
        isMultiplyingChange: true,
        multiplier: 3,
        isAddingPeriodically: true,
        periodicAmount: 10,
        periodicInterval: "week",
        targetAmount: 15644,
        currency: "€",
    }

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.name}>{vault.name}</h3>
            <span className={styles.amount}>{vault.currency}{vault.amount}</span>

            <ProgressBar value={vault.amount} goal={vault.targetAmount} />

            <div className={styles.spareChange}>
                <span>Spare change</span>
                <span>x{vault.multiplier}</span>
            </div>

            <div className={styles.periodic}>
                <span>Periodic</span>
                <span>{vault.periodicAmount}€ every {vault.periodicInterval}</span>
            </div>
            <div className={styles.buttonsWrapper}>
                <button className={styles.button}>Fund</button>
                <button className={styles.button}>Edit</button>
            </div>
        </div>
    )
}
