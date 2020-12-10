import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../../../../../Context'
import styles from './TagsColumn.module.css'

const TagsColumn = ({ tagsArray, header, index }) => {

    return (
        <div
            style={{
                textAlign: 'center',
                borderRight: 'solid black 2px',
                background: header ?
                    '#cccccc' : index % 2 === 0 ?
                        '#eeeeee' : '#ffffff'
            }}
        >
            {header ?
                'Tags' :
                <div>
                    {tagsArray.map((item, i) =>
                        <div
                            key={i}
                            className={styles.tagItem}
                        >
                            {item}
                        </div>)}
                </div>
            }
        </div>
    )
}

export default TagsColumn