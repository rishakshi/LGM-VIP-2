import React from 'react'

export const Footer = () => {
    let footerstyle = {
        position: "relative",
        top: "180px",
        width: "100%",
    }
    return (
        <footer className="bg-dark text-light text-center py-3" style={footerstyle}>
            Copyright &copy; 2021
        </footer>
    )
}
