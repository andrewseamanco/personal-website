import { React, useState } from 'react'
import {storyRoot, braceYourself, checkTheRoom} from '../gameObjects/storyNodes'
import TextGame from './components/TextGame'

const TextGame = () => {
  const [choice, setChoice] = useState(storyRoot)
  console.log(choice)
  return (
    <div className="gameHolder">
    <TextGame node={choice} branch={userChoice => setChoice(userChoice)} />
    </div>
  )
}

export default TextGame
