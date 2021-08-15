export const Badge = ({children, value}) => (
    exportBadge({children}, {value})
)

function exportBadge(children, clazz) {
    let background;
    if (clazz === 'error') {
        background = '#da5961';
    } else if (clazz === 'warn') {
        background = '#e7c000';
    } else {
        background = '#42b983';
    }
    return <span style={{
        backgroundColor: {background},
        borderRadius: '3px',
        fontSize: '14px',
        color: '#ffffff'
    }}>{children}</span>;
}
