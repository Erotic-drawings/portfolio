import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AssSvg from "!svg-react-loader!../images/svg/ass.svg?name=AssSvg"

import { motion } from "framer-motion"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="common-container">
      <div className="mt-20 mb-10 mt-2-xs mb-5-xs flex justify-center flex-col-xs">
        <nav className="flex flex-col items-baseline items-center-xs">
          <Link className="common-link my-4 my-2-xs" to="/drawings">Drawings</Link>
          <a href="mailto:erotic.drawings.75@gmail.com" rel="noreferrer" target="_blank" className="common-link my-4 my-2-xs" to="/">Contact</a>
        </nav>
        <motion.div animate={{ scale: 1 }} className="bg-pink block p-10 p-5-xs -ml-15 mt-10-xs -ml-0-xs text-align-center">
          <AssSvg />
        </motion.div>
      </div>
      <main className="flex justify-center">
        <h1 className="big-small f2-xs font-montaga text-dark font-normal my-auto">Here is a private place, <br />I really hope you'll like <br /><strong>my world</strong>...</h1>
      </main>
    </div>
  </Layout>
)

export default IndexPage
