import React from "react"
import Header from "../components/header"

export default () => (
    <div style = {{ color: 'teal' }}>
        <Header headerText="About Gatsby" />
        <Header headerText="More about cheese later" />

        <p>Much crusty.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
)