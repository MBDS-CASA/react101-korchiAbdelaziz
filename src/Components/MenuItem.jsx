import React from 'react'

const MenuItem = ({ name, active, onClick }) => {
    return (
        <li
            onClick={onClick}
            style={{
                cursor: 'pointer',
                fontWeight: active ? 'bold' : 'normal',
                color: active ? '#007bff' : '#000',
                padding: '5px 10px'
            }}
        >
            {name}
        </li>
    )
}

export default MenuItem
