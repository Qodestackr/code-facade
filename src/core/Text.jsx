import React from 'react'

export function Text({ as, className, children }) {
    const TagName = as || 'div'
    return (
        React.createElement(TagName, { className: className }, children)
    )
}

Text.displayName = '@Text'
