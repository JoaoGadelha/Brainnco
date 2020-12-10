import React from 'react'
import styles from './SuggestionWindowItem.module.css'
import { addTag } from '../../../../../Functions/Functions'

const SuggestionWindowItem = (props) => {

    return (
        <div
            className={styles.container}
            onClick={() => {
                props.setTagAlreadyExists(
                    addTag(
                        props.item,
                        props.tagsArray,
                        props.setTagsArray
                    )
                )
                props.setTagsInput('');
            }}
        >
            {props.item}
        </div>
    )
}

export default SuggestionWindowItem