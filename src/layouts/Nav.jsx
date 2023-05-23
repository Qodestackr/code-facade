import React from 'react'
import { Link } from 'react-router-dom'


import HamburgerMenu from './HamburgerMenu'

const headerLinks = [
    {
        name: 'Pricing',
        uri: '/pricing'
    },
    {
        name: 'Features',
        uri: '/app-features'
    },
    {
        name: 'About',
        uri: '/about'
    },
    {
        name: 'Mobile App',
        uri: '/mobile-page'
    },
    {
        name: 'How it works',
        uri: '/'
    }
]

/***
 * TODO: Refactor Auth & Normal Links for Nav
 * ! * isAuthenticated feels spaghetti all over
 */


export default function HeaderNav() {
    const isAuthenticated = false

    let navLeftMargin = '0'

    if (isAuthenticated) {
        navLeftMargin = '15vw'
    }

    return (
        // <header style={{ position: "fixed", top: 0, marginBottom: "20px", width: "100vw", overflowX: "scroll", marginLeft: `${navLeftMargin}px`, height: "20vh", backgroundColor: "#161a2e", zIndex: 10, transition: "all 150ms ease-out" }}>
        //     <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: isAuthenticated ? "flex-end" : "center", placeItems: "end", flexDirection: isAuthenticated ? "row-reverse" : "" }} classNameName="container mx-auto text-white px-5 py-6 transition-all delay-150">
        //         {<Link to="/" style={{ fontSize: "3rem", fontWeight: "bold", transition: "all 150ms ease-out" }}>Remote system</Link>}
        //         <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        //             <ul>
        //                 <li>
        //                     <Link to="/exec" style={{ padding: "0.75rem 1rem", backgroundColor: "white", color: "black", borderRadius: "0.25rem", transition: "all 150ms ease-out" }} classNameName="hover:bg-[#5a5df5] hover:text-white">
        //                         Try for free
        //                     </Link>
        //                 </li>
        //             </ul>

        //         </nav>
        //     </div>
        // </header>
            <nav className="flex flex-wrap items-center justify-between items-center py-6 bg-[#234] maxW-[100vw]">
        <div className="logo"><h1><Link to='/'>CodeFacade</Link></h1></div>
        <div>
            <ul className="flex flex-wrap items-center gap-2 mr-4">
                <li className="text-green-100">Learn</li>
                <li className="text-green-100">Blog/Thoughts</li>
                <li className="text-green-100">
                    <button type="button" className="bg-blue-400 text-white rounded-xl px-6 py-3">Sign In</button>
                </li> 
                {/* <!--Firebase Social auth only :: SignIn/ Logout--> */}
            </ul>
        </div>
    </nav>

    )
}