import * as React from 'react'

export interface InvariantProps extends HTMLAllCollection {
    condition: any
    message: any
    as: any
    className: string
}

declare class Invariant extends React.Component<InvariantProps, any> {}

export default Invariant
