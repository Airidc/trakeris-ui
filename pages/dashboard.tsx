import Head from 'next/head'
import Link from 'next/link'

export default function Dashboard() {
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
        </div>
    )
}
