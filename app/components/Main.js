import React from 'react'
import ReactDOM from 'react-dom'

let Main = React.createClass({
  render: function () {
    return (
      <div>
        hi you
      </div>
    )
  }
})

ReactDOM.render(<Main />, document.getElementById('app'))