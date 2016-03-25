import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
// Binds together three principles of redux
// Store holds current application state object, lets you dispatch actions, and when you create it you need to specify the reducer that explains how state is updated with actions.

import expect, { createSpy, spyOn, isSpy } from 'expect'

const counter = ( state = 0, action ) => {
  // If state = undefined should return expected default state, which is 0
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
const store = createStore( counter );

// Store has three important methods
console.log( store.getState() ); // gets current state of the store

// dispatch - lets you dispatch actions to change the state of your application
store.dispatch({ type: 'INCREMENT' });

// Subscribe lets you register a callback that the redux tool will call whenever action has been dispacted, so you can update your UI when it gets updated
store.subscribe(() => {
  ReactDOM.render(<Main />, document.getElementById('app'))
})



expect(counter(0, { type: 'INCREMENT' } )).toEqual(1);
expect(counter(1, { type: 'INCREMENT' } )).toEqual(2);
expect(counter(1, { type: 'DECREMENT' } )).toEqual(0);
expect(counter(2, { type: 'DECREMENT' } )).toEqual(1);
expect(counter(0, { type: 'SOMETHING_ELSE' } )).toEqual(0);
console.log('Tests Passed!');

let Main = React.createClass({
  handleClick: function(e) {
    store.dispatch({ type: 'INCREMENT' });
  },
  render: function () {
    return (
      <div onClick={ this.handleClick }>
        hi you { store.getState() }
      </div>
    )
  }
})

ReactDOM.render(<Main />, document.getElementById('app'))