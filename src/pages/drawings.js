import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { motion } from "framer-motion"

import AssSvg from "!svg-react-loader!../images/svg/ass.svg?name=AssSvg"
import BodySvg from "!svg-react-loader!../images/svg/body-1.svg?name=BodySvg"
import Body2Svg from "!svg-react-loader!../images/svg/body-2.svg?name=Body2Svg"
import Body3Svg from "!svg-react-loader!../images/svg/body-3.svg?name=Body2Svg"
import Body4Svg from "!svg-react-loader!../images/svg/body-4.svg?name=Body2Svg"

const data = [
    <AssSvg />, <BodySvg />, <Body2Svg />, <Body3Svg />, <Body4Svg />
]

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const ListVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};


const IndexPage = () => {

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsOpen(true)
        },100)
    }, [])

    return (
        <Layout>
            <SEO title="Home" />
            <div className="common-container">
                <h1 className="f1 font-montaga font-normal">Drawings.</h1>
                <main>
                    <motion.ul animate={isOpen ? "open" : "closed"} variants={ListVariants} className="flex flex-wrap">
                        {
                            data.map((svg, i) =>
                                <motion.li i={i} key={i}
                                    variants={variants}
                                    className="bg-pink block p-10 p-5-xs mr-2 mt-2 mt-10-xs -ml-0-xs text-align-center flex flex-grow-1 justify-center items-center opacity-0">
                                    {svg}
                                </motion.li>)
                        }
                    </motion.ul>
                </main>
            </div>
        </Layout>
    )
}

export default IndexPage
