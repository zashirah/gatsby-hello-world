import React from "react"
import { Link } from 'gatsby'
import Header from "../components/Header.js"

export default function Home() {
  return <div>
    <Link to="/contact/">Contact</Link>
    <Header headerText="Hello Gatsby!" />
    </div>
}
