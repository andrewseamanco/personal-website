import { React, useState } from 'react'
import {storyRoot} from '../gameObjects/CatholicSchool'
import GameComponent from './components/GameComponent'

const TextGame = () => {
  const [choice, setChoice] = useState(storyRoot)
  console.log(choice)
  return (
    <div className="gameHolder">
    <GameComponent node={choice} branch={userChoice => setChoice(userChoice)} />
    </div>
  )
}

export default TextGame
