import React from 'react'

function HamburgerMenu() {
    const styles = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '1rem'
    }
    const spanStyles = {
        height: '2px',
        width: '40px',
        backgroundColor: 'white'
    }

    return (
        <button style={styles}>
            <span style={spanStyles}></span>
            <span style={spanStyles}></span>
            <span style={spanStyles}></span>
        </button>
    )
}

export default HamburgerMenu