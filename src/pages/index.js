import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Sidebar from "../components/sidebar"
import Main from "../components/main"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Sidebar />
    <Main />
    
  </Layout>
)

export default IndexPage
