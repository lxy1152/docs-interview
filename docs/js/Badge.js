import React from "react"

export default function Layout({children, value}) {
    let background;
    if (value === 'error') {
        background = '#da5961';
    } else if (value === 'warn') {
        background = '#e7c000';
    } else {
        background = '#42b983';
    }
    return <span style={{
        backgroundColor: background,
        borderRadius: '7px',
        fontSize: '14px',
        color: '#ffffff',
        padding: '4px',
        marginTop: '0'
    }}>{children}</span>;
}
