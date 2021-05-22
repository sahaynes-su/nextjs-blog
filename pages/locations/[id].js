import Layout from '../../components/layout'
import Row from '../../components/row'
import Col from '../../components/col'

import Image from 'next/image'
import Link from 'next/link'

import { getAllSingleLocationSlugs, getSingleLocationBySlug} from '../../lib/api'

export async function getStaticPaths() {

    const allSlugs = await getAllSingleLocationSlugs()

    const paths = allSlugs.edges.map(edge => {
        const { slug } = edge.node
        return {
            params: {
                id: slug
            }
        }
    })

        return {
            paths, 
            fallback: false
        }
}

export async function getStaticProps({ params }) {
    const singleLocationData = await getSingleLocationBySlug(params.id)

    return {
        props : {
            singleLocationData
        }
    }
}

export default function SingleLocation(singleLocationData) {
    
    const { title, content } = singleLocationData;

    
    
    return (
        <Layout>
            <Row>
                <Col>
                    <Link href="/locations">
                        <a>Back to locations list</a>
                    </Link>
                </Col>
            </Row>
            
           
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content}}/>
        </Layout>
    )
}


//getStaticPaths
//getStaticProps
//initialize the component