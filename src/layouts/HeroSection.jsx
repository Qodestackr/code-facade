import React from 'react'

import { Link } from 'react-router-dom'
// components
import { Text } from '../core/Text'

// assets
import playSVG from "../assets/images/play.svg"
import Banner3 from "../assets/images/banner3-1.jpeg"

import './hero.css';

const HeroSection = () => {
    return (
        <section className="hero-section" id="home">
            <div className="container">
                <div className="flex-col md:flex-row hero-content splitz">
                    <div className="flex-col lg-flex-grow md-half lg-pr-8 md-items-start 
                        md-text-left items-center text-center mb-8 md-mb-0">
                        <Text as='h1' className='hero-title'>
                            Run Your Code Anywhere, Anytime
                        </Text>

                        <Text as='p' className="hero-description">
                            Automate your workflow with our powerful remote code execution platform.
                            Seamless and efficient features. Real-time coding, storage, and collaborations.

                        </Text>

                        <ul className="hero-buttons">
                            <li>
                                <Link to="/" className="hero-button primary-button">
                                    How it works
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="hero-button secondary-button hero-buttons">
                                    <img className="play-icon" src={playSVG} alt="" /> <span
                                        className="ml-1">Start Code</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="md-half">
                        <img className="hero-image" src={Banner3} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
