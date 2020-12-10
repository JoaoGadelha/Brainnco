import React from 'react'
import styles from './EditBtnsColumn.module.css'

const EditBtnsColumn = ({ index, header,
    setCurrentRepoIndex, setEditTagsWindowIsOpen }) => {

    return (
        <p
            onClick={
                () => {
                    setCurrentRepoIndex(index);
                    setEditTagsWindowIsOpen(true);
                }
            }
            className={styles.editBtn}
            style={{
                background: header ?
                    '#cccccc' :
                    index % 2 === 0 ?
                        '#eeeeee' :
                        '	#ffffff'
            }}
        >
            {header ? '' : 'edit'}
        </p>
    )
}

export default EditBtnsColumn