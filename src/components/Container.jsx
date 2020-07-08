import Head from 'next/head'

const Container = (props) => {
    return(
        <div>
            <Head>
                <title>SpaceX Launches</title>
            </Head>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Container