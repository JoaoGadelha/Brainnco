import React from 'react'

const LanguagesColumn = ({index,header,data}) => {

    return (
        <p
            style={{
                borderRight: 'solid black 2px',
                background: header ?
                    '#cccccc' : index % 2 === 0 ?
                        '#eeeeee' : '#ffffff'
            }}>
            {data.language}
        </p>
    )
}

export default LanguagesColumn