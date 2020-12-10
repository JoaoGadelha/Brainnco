import React from 'react'
import styles from './Tag.module.css'
import { removeTag } from '../../../../Functions/Functions'

const Tag = (props) => {

    return (
        <div className={styles.container}>
            <p>{props.tag}</p>
            <p className={styles.cancelTagButton}
                onClick={
                    () => removeTag(props.index,
                        props.tagsArray,
                        props.setTagsArray)
                }
            >X</p>
        </div>
    )
}

export default Tag