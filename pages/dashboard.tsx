import { NextServer } from 'next/dist/server/next';
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import CircularProgressBar from '../components/circular-progress/circularProgress';
import Vault from '../components/vault/vault';
import ExpenseTable from '../components/expense-table/expenseTable';
import QuickOverview from '../components/quick-overview/quickOverview';
import RecentActivity from '../components/recent-activity/recentActivity';
import { useAppSelector } from '../lib/store/hooks';
import { AppConfigState, changeCurrentPage, selectAppConfig } from '../lib/store/slices/appConfigSlice';
import { AuthSliceState, AuthStates, selectUserData } from '../lib/store/slices/authSlice';
import { getTransactions } from '../lib/store/slices/transactionsSlice';

export default function Dashboard() {
    const dispatch = useDispatch();
    const authData = useAppSelector<AuthSliceState>(selectUserData);

    useEffect(() => {
        dispatch(changeCurrentPage({ currentPage: "Dashboard" }))
        return () => {

        }
    }, [])

    const dispatchGetTransactions = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
        if (authData.user) {
            dispatch(getTransactions(authData.user.id));
        }
    }

    return (
        <main className="dashboard-page-container">
            {/* <Link href="/signin"><a className="homepage__link">Sign In</a></Link>
            <Link href="/signup"><a className="homepage__link">Sign Up</a></Link>
            <Link href="/"><a className="homepage__link">Homepage</a></Link> */}
            {/* <span onClick={dispatchGetTransactions} >Get Transactions</span> */}
            <Head>
                <title>[TRK] Trakeris - Dashboard</title>
                <meta name="description" content="Trakeris - Expense and Finance Tracker. Track your daily expenses and use rich reports to examine your spending habbits." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <h1 className="page--title">Dashboard</h1>
            </header>

            <div className="center-content">
                <QuickOverview />
                <ExpenseTable />
            </div>
            <div className="right-side-content">
                <RecentActivity />
            </div>
            <div className="below-content">
                <div className="monthly-goals">
                    <h4>Monthly Goals:</h4>
                    <div className="goals-container">
                        <CircularProgressBar value={125} to={154} label={'Islaidos'}></CircularProgressBar>
                        <CircularProgressBar value={125} to={154} label={'Islaidos'}></CircularProgressBar>
                        <CircularProgressBar value={125} to={154} label={'Islaidos'}></CircularProgressBar>
                    </div>
                </div>
                <div className="vaults">
                    <h4>Vaults</h4>
                    <div className="vaults-container">
                        <Vault />
                        <Vault />
                        <Vault />
                        <Vault />
                        <Vault />
                        <Vault />
                    </div>
                </div>
            </div>
        </main>
    )
}