import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Paragraph from "../components/paragraph"

export default () => (
    <div style={{color: 'purple' }}>
        <Link to="/contact/">Contact</Link>
        <Header headerText="Cheese Blunts" />
        <Paragraph paragraphText="Crispy and crunchy" />
        
        {/* <img src="https://source.unsplash.com/random/400x200" alt="" /> */}
    </div>
    )

    