import React, { useEffect } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const Header = () => {

    const location = useLocation();

    return (
        <div className={styles.container}>
            <p>githubstars</p>
            {location.pathname !== '/' &&
                <Link to='/'
                >
                    home
                </Link>}
        </div>
    )
}

export default Header