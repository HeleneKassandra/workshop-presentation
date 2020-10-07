import React from 'react'

export default ({ children }) => (
    <div
        style={{
            display: 'grid',
            maxWidth: '1300px',
            gridTemplateColumns: 'fit-content(40%) auto',
            gridColumnGap: '1rem',
            textAlign: 'left'
        }}>
        {children}
    </div>
)