import React, { useContext } from 'react'
import styles from './ReposSearchResultGrid.module.css'
import ReposSearchResultGridRow from './ReposSearchResultGridRow/ReposSearchResultGridRow'
import { Context } from "../../../Context";

const ReposSearchResultGrid = ({
    setEditTagsWindowIsOpen,
    editTagsWindowIsOpen,
    filterByTagInput
}) => {
    let { searchResult } = useContext(Context);
    return (
        <div className={styles.container}>
            {/* This renders the first line of the search result table*/}
            <ReposSearchResultGridRow
                data={{
                    name: 'Repository', description: 'Description',
                    language: 'Language'
                }} header={true}
            />
            {/* This renders the remaining lines */}
            {searchResult
                .map((item, i) =>
                    <ReposSearchResultGridRow
                        key={i} data={item} index={i}
                        setEditTagsWindowIsOpen={setEditTagsWindowIsOpen}
                        editTagsWindowIsOpen={editTagsWindowIsOpen}
                        filterByTagInput={filterByTagInput}
                    />
                )
            }
        </div>
    )
}

export default ReposSearchResultGrid