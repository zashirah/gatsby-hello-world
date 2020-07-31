import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

function Contact() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Layout>
        <div style={{ color: `teal` }}>
          <Header headerText="Contact" />
          <p>Send us a message!</p>
        </div>
      </Layout>
    </div>
  )
}

export default Contact