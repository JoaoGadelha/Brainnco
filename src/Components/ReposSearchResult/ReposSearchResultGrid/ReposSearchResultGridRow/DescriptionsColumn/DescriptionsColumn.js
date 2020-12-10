import React from 'react'

const DescriptionsColumn = ({index,header,data}) => {

    return (
        <p
            style={{
                borderRight: 'solid black 2px',
                background: header ?
                    '#cccccc' :
                    index % 2 === 0 ?
                        '#eeeeee' : '#ffffff'
            }}>
            {data.description}
        </p>
    )
}

export default DescriptionsColumn