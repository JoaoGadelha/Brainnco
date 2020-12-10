import React, { useContext, useEffect, useState } from 'react'
import styles from './ReposSearchResultGridRow.module.css'
import { Context } from '../../../../Context'
import { restoreTagsFromLocalStorage } from '../../../../Functions/Functions'
import TagsColumn from './TagsColumn/TagsColumn'
import NamesColumn from './NamesColumn/NamesColumn'
import EditBtnsColumn from './EditBtnsColumn/EditBtnsColumn'
import LanguageColumn from './LanguagesColumn/LanguagesColumn'
import DescriptionColumn from './DescriptionsColumn/DescriptionsColumn'

// Renders a row in the search table
// For the first row, renders a #cccccc background color
// For the remaining rows, switches between #ffffff
// and #eeeeee background colors, forming a zebra stripped pattern

const ReposSearchResultGridRow = ({
    setEditTagsWindowIsOpen,
    editTagsWindowIsOpen,
    filterByTagInput,
    data,
    header,
    index
}) => {
    let { setCurrentRepoIndex,
        currentRepoIndex,
        searchResult } = useContext(Context);
    let [renderThisRow, setRenderThisRow] = useState(true);
    let [tagsArray, setTagsArray] = useState([]);

    useEffect(() => {
        if (searchResult.length > 0 &&
            searchResult[index] !== undefined &&
            restoreTagsFromLocalStorage(searchResult[index].id)
            !== null
        ) {
            setTagsArray(
                restoreTagsFromLocalStorage(searchResult[index].id)
            )
        }
    }, [editTagsWindowIsOpen])

    useEffect(() => {
        setRenderThisRow(true);
        if (!header) {
            if (filterByTagInput !== '') {
                if (!tagsArray.includes(filterByTagInput)) {
                    setRenderThisRow(false);
                }
            }
        }
    }, [filterByTagInput])

    if (renderThisRow) { // if this row was not filtered
        //out in the search by tags, render it.
        return (
            <>
                <NamesColumn index={index} header={header} data={data}
                    renderThisRow={renderThisRow}
                />
                <DescriptionColumn index={index} header={header} data={data} />
                <LanguageColumn header={header} index={index} data={data} />
                < TagsColumn tagsArray={tagsArray} index={index}
                    header={header}
                />
                <EditBtnsColumn setCurrentRepoIndex={setCurrentRepoIndex}
                    setEditTagsWindowIsOpen={setEditTagsWindowIsOpen}
                    index={index}
                    header={header}
                />
            </>
        )
    } else {
        return (<></>)
    }
}
export default ReposSearchResultGridRow