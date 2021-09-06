import Image from 'next/image'
import React from 'react'
import * as styles from "./recentActivityStyles.module.css"
import profilePic from '../../public/me.png'

export default function RecentActivityLogItem() {
    return (
        <div className={styles.logItem}>
            <div className={`${styles.ImageWrapper} ${styles.income}`}>
                <Image src={profilePic} className={styles.logItemPic} alt="User profile picture" />
            </div>
            <div className={styles.txInfoWrapper}>
                <span className={styles.txInfoDate}>Yesterday</span>
                <span className={styles.txInfoAmount}>Spent <b>83€</b></span>
            </div>
            <div className={styles.txLabelsWrapper}>
                <span>Lidlas</span>
                <span>Pagrinde maistas ir cipsai su sidriuku</span>
            </div>
        </div>
    )
}
