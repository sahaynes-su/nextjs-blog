import Layout from '../../components/layout'
import Card from '../../components/card'
import Row from '../../components/row'
import Section from '../../components/section'
import Col from '../../components/col'

import { getSingleLocations } from '../../lib/api'


//getStaticProps
export async function getStaticProps() {
    const singleLocations = await getSingleLocations() 

    return {
        props: { singleLocations }
    }
}

export default function Locations( { singleLocations }) {
    return (
        <Layout>
            <h1>Locations</h1>
            <p>This is the locations page introduction.</p>
            
            {singleLocations.edges.map((edge, index) => {
                const { node } = edge;
                return <Card node={node} key={index} />
            
            })}
        </Layout>
    )
}