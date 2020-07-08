import Head from 'next/head'
import { withApollo } from '../../lib/withApollo'
import Navigation from '../components/navigation'

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Navigation/>
            <Head>
                <title>SpaceX Launches</title>
            </Head>
            <Component {...pageProps} />
        </div>
    )
}

export default withApollo({ ssr: true })(MyApp)