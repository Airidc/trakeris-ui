import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>[TRK] Trakeris - Expense and Finance Tracker</title>
        <meta name="description" content="Trakeris - Expense and Finance Tracker. Track your daily expenses and use rich reports to examine your spending habbits." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello World!</h1>
    </div>
  )
}
