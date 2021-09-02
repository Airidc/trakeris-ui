import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider, useStore } from 'react-redux'
import { store, wrapper } from '../lib/store/store'
import Layout from '../components/layout'
import { AuthSliceState, selectUserData } from '../lib/store/slices/authSlice'
import { useAppSelector } from '../lib/store/hooks'

function MyApp({ Component, pageProps }: AppProps) {
  const authData = useAppSelector<AuthSliceState>(selectUserData);

  return (
    <Provider store={store}>
      {authData.user ? <Layout>
        <Component {...pageProps} />
      </Layout> : <Component {...pageProps} />}

    </Provider>)
}
export default wrapper.withRedux(MyApp)
