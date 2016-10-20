import React from 'react'
import ReactDom from 'react-dom'
import './app.css'
import styles from './styles.modules.css'
//import 'font-awesome/css/font-awesome.css'

const App = React.createClass({
  render: function () {
    return (
      <div className = {styles.wrapper}>
      <h1>
      // <i className='fa fa-star'></i>
      Environment : {__NODE_ENV__}</h1>
      </div>)
  }
})

const mountNode = document.querySelector('#root')
ReactDom.render(<App />, mountNode)
