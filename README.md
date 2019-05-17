# useActions &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/lucgauer/use-actions/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/use-actions.svg?style=flat)](https://www.npmjs.com/package/react)

Inspired by [redux-thunk](https://github.com/reduxjs/redux-thunk), action binding for your your application.

Fits well with [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer) for state management. 😎

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


* Container
```
import { React, useReducer } from 'useActions';
import useActions from 'useActions';
import * as actions from '../actions/foobar';
import * as reducers from '../reducers/foobar';

const FoobarContainer = () => {
    const [] = useReducer(actions, dispatch);
    const { dispatchBindedAction } = useActions(actions, dispatch);
    
    // Runs passing curried dispatch to the action
    return <button onClick={dispatchBindedAction}>Click me</button>;
};
```

* Actions
```
// actions/foo-bar.jsx
const ACTION_TYPE = 'ACTION_TYPE';

export default argument => dispatch => {
    [...]
    dispatch({ type: ACTION_TYPE, payload: argument });
}
```


### License

React is [MIT licensed](./LICENSE).
