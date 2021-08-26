import Head from 'next/head'
import Link from 'next/link'
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../lib/store/hooks';
import { AppConfigState, changeCurrentPage, selectAppConfig } from '../lib/store/slices/appConfigSlice';
import { AuthSliceState, AuthStates, selectUserData } from '../lib/store/slices/authSlice';
import { getTransactions } from '../lib/store/slices/transactionsSlice';

export default function Dashboard() {
    const dispatch = useDispatch();
    dispatch(changeCurrentPage({ currentPage: "Dashboard" }))
    const authData = useAppSelector<AuthSliceState>(selectUserData);

    const dispatchGetTransactions = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
        if (authData.user) {
            dispatch(getTransactions(authData.user.id));
        }
    }

    return (


        <div className="page-container">
            <Head>
                <title>[TRK] Trakeris - Dashboard</title>
                <meta name="description" content="Trakeris - Expense and Finance Tracker. Track your daily expenses and use rich reports to examine your spending habbits." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Dashboard page</h1>

            <Link href="/signin"><a className="homepage__link">Sign In</a></Link>
            <Link href="/signup"><a className="homepage__link">Sign Up</a></Link>
            <Link href="/"><a className="homepage__link">Homepage</a></Link>

            <span onClick={dispatchGetTransactions} >Get Transactions</span>
            <pre></pre>
        </div>
    )
}
