# useActions &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/lucgauer/use-actions/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/use-actions.svg?style=flat)](https://www.npmjs.com/package/use-actions)

A [~200 Bytes](https://bundlephobia.com/result?p=use-actions@latest) react hook, inspired by [redux-thunk](https://github.com/reduxjs/redux-thunk), for your your application action binding.

Fits well with [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer) for state management. 🔌

## Installation
```
npm install use-actions
```

## Documentation

### useActions(actions, dispatch)

#### actions

Object containing all actions in the [Redux Thunk model](https://github.com/reduxjs/redux-thunk#motivation).

#### dispatch

The dispatch action. Take a look at [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer).

#### Examples

A classical example o usage:

* Actions
```js
// actions/foo-bar.jsx
const ACTION_TYPE = 'ACTION_TYPE';

export default argument => dispatch => {
    // [...]
    dispatch({ type: ACTION_TYPE, payload: argument });
}
```

* Container
```jsx
import React, { useReducer } from 'useActions';
import useActions from 'use-actions';
import * as actions from '../actions/foobar';
import reducer, { initialState } from '../reducers/foobar';

const FoobarContainer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { dispatchBindedAction } = useActions(actions, dispatch);
    
    // Runs passing curried dispatch to the action
    return <button onClick={dispatchBindedAction}>Click me</button>;
};
```

### License

React is [MIT licensed](./LICENSE).
