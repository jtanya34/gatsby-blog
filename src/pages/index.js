import React from "react"
import { graphql } from "gatsby"
import Page1 from "./page1"
import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  const { allSanityPost } = data
  return (
    <>
      <Layout>
        <div>
          {/* <Image/> */}
          <Page1
            title={allSanityPost.nodes[0].title}
            image={allSanityPost.nodes[0].mainImage}
            data={allSanityPost.nodes[0].categories}
          />
        </div>
      </Layout>
    </>
  )
}

export default IndexPage

export const query = graphql`
  {
    allSanityPost {
      nodes {
        title
        mainImage {
          asset {
            fluid {
              src
            }
          }
        }
        categories {
          title
          description
        }
      }
    }
  }
`
