import React from "react"
import { Link } from 'gatsby'
import Header from "../components/header"

function Home() {
  return (
    <div>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Hello Gatsby!" />
      <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
        <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
        <p>
          What do I like to do? Lots of course but definitely enjoy building
          websites.
        </p>
      </div>
    </div>
  )
}

export default Home