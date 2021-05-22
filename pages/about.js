import Layout from '../components/layout'
import Head from 'next/head'

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About Me</title>
                <meta name="description" content="More about me"> </meta>
            </Head>
            <h1>About Me</h1>
        </Layout>
    )
}