import * as React from "react"
import Hero from '../components/Hero'
import IPFSNote from '../components/IPFSNote'
import   './global.css'

const IndexPage = () => {

  return (<section>
    <header>

    <div className="hero-container">
      <div>
      <h1>José Andradez</h1>
      <h5>Full stack developer / blockchain enthusiast</h5>
      </div>
      <div className="avatar">
   
        </div>
      <div>
    </div>
    </div>
  </header>
<IPFSNote />

  </section>)
}
export default IndexPage
