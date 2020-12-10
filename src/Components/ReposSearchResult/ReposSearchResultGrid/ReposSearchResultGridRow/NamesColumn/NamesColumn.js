import React from 'react'
import styles from './NamesColumn.module.css'

const NamesColumn = ({ index, header, data, renderThisRow }) => {
    return (
        <p className={styles.name}
            style={{
                background: header ?
                    '#cccccc' :
                    index % 2 === 0 ?
                        '#eeeeee' : '	#ffffff',
                borderRight: 'solid black 2px',
                color: header ? 'black' : '',
                textDecoration: header ? 'none' : ''
            }}
        >
            <a href={data.svn_url}>
                {renderThisRow && data.name}
            </a>
        </p>
    )
}

export default NamesColumn