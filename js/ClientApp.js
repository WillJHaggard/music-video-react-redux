import React from 'react'
import ReactDOM from 'react-dom'

const App = (props) => (
  <div>
    <h1>Hola from {props.location
                          .split('')
                          .reverse()
                          .join('')
                          .toUpperCase()}</h1>
  </div>
)

const target = document.getElementById('app')
const newDiv = document.createElement('div')
target.appendChild(newDiv)
ReactDOM.render(
  <App location='Charleston, South Carolina' />,
  newDiv
)
