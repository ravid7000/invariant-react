import React from 'react'

const Invariant = ({ condition, className, message, as, ...props }) => {
    if (!condition) {
        return null
    }

    className = className ? `invariant ${className}` : 'invariant'
    if (as) {
        return React.createElement(as, {
            ...props,
            className,
            children: message,
        })
    }

    return (
        <div {...props} className={className}>
            {message}
        </div>
    )
}

export default Invariant
