import Image from 'next/image'
import React from 'react'
import * as styles from "./recentActivityStyles.module.css"
import profilePic from '../../public/me.png'

export default function RecentActivityLogItem() {

    const isIncome = false; // change to transaction type later
    return (
        <div className={styles.logItem}>
            <div className={`${styles.ImageWrapper} ${isIncome ? styles.income : styles.expense}`}>
                <Image src={profilePic} className={styles.logItemPic} alt="User profile picture" />
            </div>
            <div className={styles.txInfoWrapper}>
                <span className={styles.txInfoDate}>Yesterday</span>
                <span className={styles.txInfoAmount}>Spent <b>83€</b></span>
            </div>
            <div className={styles.txLabelsWrapper}>
                <span className={styles.txName}>Lidlas</span>
                <span className={styles.txComment}>Pagrinde maistas ir cipsai su sidriuku</span>
            </div>
        </div>
    )
}
