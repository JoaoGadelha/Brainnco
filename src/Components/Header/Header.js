import React from 'react'
import styles from './Header.module.css'
import {Link} from 'react-router-dom'

const Header = () => {

    return (
        <div className={styles.container}>
            <p>githubstars</p>
            <Link to='/'>home</Link>
        </div>
    )
}

export default Header