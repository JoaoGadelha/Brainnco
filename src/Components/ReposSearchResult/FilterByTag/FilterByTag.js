import React, { useState } from 'react'
import styles from './FilterByTag.module.css'

const TagsSearch = ({setFilterByTagInput}) => {
    let [searchInput, setSearchInput] = useState();

    return (
        <div className={styles.container}>
            <form className={styles.searchBorder}
                onSubmit={(e) => {
                    e.preventDefault();
                    setFilterByTagInput(searchInput.toLowerCase())
                }}
            >
                <i className="fas fa-search"></i>
                <input placeholder='search by tag'
                    className={styles.input}
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                ></input>
            </form>
        </div>
    )
}

export default TagsSearch