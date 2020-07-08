import Head from 'next/head'
import { withApollo } from '../../lib/withApollo'

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>SpaceX Launches</title>
            </Head>
            <Component {...pageProps} />
        </div>
    )
}

export default withApollo({ ssr: true })(MyApp)