import React from "react"
import { Link } from 'gatsby'
import Header from "/opt/build/repo/src/components/header"

export default function Home() {
  return <div>
    <Link to="/contact/">Contact</Link>
    <Header headerText="Hello Gatsby!" />
    </div>
}
