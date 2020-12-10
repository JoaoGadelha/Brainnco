import React, { useState, useContext } from 'react'
import styles from './ReposSearchBar.module.css'
import { submitSearch } from '../../Functions/Functions'
import { Context } from "../../Context.js";
import { useHistory } from "react-router-dom";

const ReposSearchBar = (props) => {
    let [searchInput, setSearchInput] = useState('bradtraversy');
    let { setSearchResult, setLoading } = useContext(Context);
    const history = useHistory();

    return (
        <div className={styles.container} >
            <form onSubmit={(e) => {submitSearch(e,
                searchInput,
                setSearchResult,
                history,
                props.match.params.users,
                setLoading);
            setLoading(true)}}
                className={styles.form}
            >
                <h1 className={styles.label}>https://github.com/</h1>
                <input value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className={styles.input} ></input>
                <button className={styles.button}>
                    <p>get repositories</p>
                    <div className={styles.arrowHead}></div>
                </button>
            </form>
        </div>
    )
}

export default ReposSearchBar