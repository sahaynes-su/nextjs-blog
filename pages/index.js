//next components
import Head from 'next/head'

//custom components
import Layout, { siteTitle } from '../components/layout'
import Button from '../components/button'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1>Sara Haynes</h1>
        <p>Student</p>
        <Button 
          label="View menu" 
          path="/menu"
          type="primary"
        />
        <Button 
          label="View Portfolio" 
          path="/portfolio"
          type="primary"
        />
        <Button 
          label="About Me" 
          path="/about"
          type="secondary"
        />
      </section>
    </Layout>
  )
}