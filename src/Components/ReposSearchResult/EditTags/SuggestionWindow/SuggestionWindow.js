import React, { useContext, useState, useEffect } from 'react'
import styles from './SuggestionWindow.module.css'
import SuggestionWindowItem from './SuggestionWindowItem/SuggestionWindowItem'
import { Context } from '../../../../Context'
import { extractTagsFromInput } from '../../../../Functions/Functions'

const SuggestionWindow = (props) => {

    let { suggestionsArray } = useContext(Context);
    let [renderSuggestions, setRenderSuggestions] = useState([]);

    useEffect(() => {
        let includedTags =
            extractTagsFromInput(
                props.tagsInput,
                suggestionsArray
            );
        setRenderSuggestions(includedTags);
    }, [props.tagsInput])

    return (
        <div className={styles.container}
            style={{
                display: props.tagsInput !== '' ?
                    renderSuggestions.length > 0 ?
                        'block' : 'none'
                    : 'none'
            }}
        >
            {renderSuggestions !== undefined ?
                renderSuggestions.
                    map(item =>
                        <SuggestionWindowItem
                            item={item}
                            setTagsInput={props.setTagsInput}
                            tagsInput={props.tagsInput}
                            tagsArray={props.tagsArray}
                            setTagsArray={props.setTagsArray}
                            setTagAlreadyExists={props.setTagAlreadyExists}
                        />
                    )
                : ''
            }
        </div>
    )
}

export default SuggestionWindow