import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { graphql } from "gatsby"

function Home( { data }) {
  return (
    <div>
      <Layout>
        <Header headerText="Hello Gatsby!" />
        <h1>Site Title: {data.site.siteMetadata.title} </h1>
        <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
        <p>
          What do I like to do? Lots of course but definitely enjoy building
          websites.
        </p>
      </Layout>
    </div>
  )
}

export default Home

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`