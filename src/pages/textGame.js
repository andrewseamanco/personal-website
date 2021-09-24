import { React, useState } from 'react'
import {storyRoot, braceYourself, checkTheRoom} from '../gameObjects/storyNodes'
import GameImage from './components/GameImage'

const TextGame = () => {
  const [choice, setChoice] = useState(storyRoot)
  console.log(choice)
  return (
    <div className="gameHolder">
    <GameImage node={choice} branch={userChoice => setChoice(userChoice)} />
    </div>
  )
}

export default TextGame
