import React from "react"
import headerStyles from "./header.module.css"

function Header({ headerText }) {
  return <h1 className={headerStyles.header}>{headerText}</h1>
}

export default Header