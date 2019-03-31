import React, { Component } from 'react'

class Invariant extends Component {
    state = {
        show: false,
    }

    render() {
        const { condition, className, message } = this.props

        if (!condition) {
            return null
        }

        className = className ? `invariant ${className}` : 'invariant'

        return <div className={className}>{message}</div>
    }
}

Invariant.defaultProps = {
    autoHide: true,
    autoHideDuration: 3000,
}

export default Invariant
