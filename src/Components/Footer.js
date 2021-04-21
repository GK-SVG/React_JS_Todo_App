import React from 'react'

export default function Footer() {
    let footerStyle = {
        position:"relative",
        top:"100vh",
        width:"100%"
    }
    return (
        <footer className="bg-dark py-3 text-light" style={footerStyle}>
            <p className="text-center">CopyRight Reserved @TodoList</p>
        </footer>
    )
}
