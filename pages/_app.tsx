import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store, wrapper } from '../lib/store/store'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>)
}
export default wrapper.withRedux(MyApp)
