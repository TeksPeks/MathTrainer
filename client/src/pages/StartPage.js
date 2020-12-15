import React from 'react'
import { Link } from 'react-router-dom'
import './StartPage.css'

const AuthPage = () => {
    return (
        <>
            <div className="contn">
                <h1 className="header">
                    Математичний тренажер
                </h1>
                <span className="startg"><Link to='/play' className="sl">&#x25B6;</Link></span>
            </div>
        </>
    )
    
}

export default AuthPage