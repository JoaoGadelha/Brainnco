import React from 'react'
import styles from './Loading.module.css'
import loading from './loading.gif'

const Loading = () => {

    return (
        <div className={styles.container}>
            <img src={loading}></img>
        </div>
    )
}

export default Loading