import React from 'react'
import './GameImage.css'

const assets = require('./../../images/textGameAssets.js')

const GameImage = (props) => {
  console.log(props)
  return (
    <div style={{backgroundImage: `url(${assets[props.node.image]})`}} className="gameSection">
      <div className="choices">
        <h1 className="title">{props.node.choice}</h1>
        <div className="story">
          <h3 className="text">{props.node.text}</h3>
        </div>
        <div className="buttons">
        {props.node.descendents.map(option => (
          <button className="button" onClick={() => props.branch(option)}>
          {option.choice}
          </button>
        ))}
        </div>
      </div>
    </div>
  )
}

export default GameImage
