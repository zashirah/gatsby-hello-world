import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import { Link } from 'gatsby'

function About() {
  return (
    <div>
      <Link></Link>
      <Layout>
        <div style={{ color: `teal` }}>
          <Header headerText="About Gatsby" />
          <p>Such wow. Very React.</p>
        </div>
      </Layout>
    </div>
  )
}

export default About
