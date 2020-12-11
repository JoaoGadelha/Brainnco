import React, { useState, useEffect } from 'react'
import styles from './ReposSearchResult.module.css'
import EditTags from './EditTags/EditTags'
import FilterByTag from './FilterByTag/FilterByTag'
import ReposSearchResultGrid from './ReposSearchResultGrid/ReposSearchResultGrid'

const ReposSearchResult = () => {
    let [editTagsWindowIsOpen, setEditTagsWindowIsOpen] = useState(false);
    let [filterByTagInput, setFilterByTagInput] = useState('');
    
   

    return (
        <div className={styles.container}>
            {/* The darkBackground div below acts as a dark
            background overlay for when the edit button is clicked */}
            <div className={styles.darkBackground}
                style={{
                    height: document.documentElement.scrollHeight,
                    width: document.documentElement.scrollWidth,
                    display: editTagsWindowIsOpen ?
                        'block' : 'none'
                }}>
            </div>
            {editTagsWindowIsOpen &&
                <EditTags setEditTagsWindowIsOpen={setEditTagsWindowIsOpen} />
            }
            <FilterByTag setFilterByTagInput={setFilterByTagInput} />
            <ReposSearchResultGrid
                setEditTagsWindowIsOpen={setEditTagsWindowIsOpen}
                editTagsWindowIsOpen={editTagsWindowIsOpen}
                filterByTagInput={filterByTagInput}
            />
        </div>
    )
}

export default ReposSearchResult