import React from 'react'
import './index.css'

/**
 * @function Invariant
 * @param  {boolean} condition      Condition to satisfied
 * @param  {string} className       Add css class to the compnent
 * @param  {string} message         Message to show when condition satisfied
 * @param  {string | Element} as    React Component or string
 * @param  {object} ...props        Other props
 * @return {Element}                React element
 */
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
