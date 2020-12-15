import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import './index.css'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <>
            <div className="bar">
                <AppBar position="static">
                    <Toolbar className="cont">
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        Math
                    </IconButton>
                    <div className="links">
                        <Button color="inherit"><Link to='/' className='l'>Main</Link></Button>
                    </div>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    )
}

export default Nav