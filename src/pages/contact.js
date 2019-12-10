import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Paragraph from "../components/paragraph"

export default () => (
    <div style={{ color: 'teal '}}>
        <Link to="/">Home</Link>
        <Header headerText="Contact" />
        <Paragraph paragraphText="Send us a message" />        
    </div>

    )