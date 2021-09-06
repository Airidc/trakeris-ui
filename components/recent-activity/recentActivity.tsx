import React from 'react'
import RecentActivityLogItem from './recentActivityLogItem'

import * as styles from "./recentActivityStyles.module.css";

export default function RecentActivity() {
    return (
        <div className={styles.wrapper}>
            <h4 className={styles.titleText}>Recent Activity</h4>
            <div className={styles.logItems}>
                <RecentActivityLogItem />
                <RecentActivityLogItem />
                <RecentActivityLogItem />
                <RecentActivityLogItem />
            </div>
        </div>
    )
}
