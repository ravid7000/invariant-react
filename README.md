# react-invariant

React component for invariant

## Installation

```sh
npm i --save react-invariant
```

```sh
yarn add react-invariant
```

## How to use?

```js
import Invariant from 'react-invariant'

<Invariant condition={someTruthyVal} message="This will not show" />
// or
<Invariant condition={someFalseVal} message="This will show message in red text" />
```

## Props:

| Prop      | Description                                                    |
| --------- | :------------------------------------------------------------- |
| condition | Falsey value to show the message                               |
| message   | `React` element or `string` to show when `condition` is falsey |
| className | Pass `string` of className                                     |
| as        | `string` to override default `div` tag. e.g `span`             |

It also supports `HTMLElement` props.
