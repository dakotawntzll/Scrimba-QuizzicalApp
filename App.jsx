import {useState, useRef, useEffect} from "react"
import Die from "./components/Die.jsx"
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

export default function App(){

	const [dice, setDice] = useState(() => generateAllNewDice()) // I have to put this in an arrow function so it doesn't get called everytime
	const buttonRef = useRef(null)

	const gameWon = dice.every((dieObj) => (dieObj.isHeld && dieObj.value === dice[0].value))

	useEffect(() => {
		if(gameWon){
			buttonRef.current.focus
		}
	}, [gameWon])

	function getRandomDieValue(){
		return Math.floor((Math.random() * 6) + 1)
	}

	function generateAllNewDice() {
		return (
			new Array(10)
				.fill()
				.map(() => ({
					value: getRandomDieValue(),
					isHeld: false,
					id: nanoid()
				}))
		)
	}

	function rollDice() {
		if (!gameWon) {
			setDice((oldDice) => oldDice.map((die) => 
				die.isHeld ? die : {...die, value: getRandomDieValue()}
			))
		} else {
			setDice(generateAllNewDice())
		}
	}

	function hold (id){
		setDice((oldDice) => oldDice.map((die) => 
			die.id === id ? {...die, isHeld: !die.isHeld} : die
		))
	}

	const diceElements = dice.map((die => (
		<Die 
			key={die.id}
			value={die.value}
			isHeld={die.isHeld}
			holdFunction={() => hold(die.id)} // Have to put it in arrow function to pass the id arguement
		/>
	)))

    return (
        <main>
            {gameWon ? <Confetti/> : null}
			<div aria-live="polite" className="sr-only">
				{gameWon ? <p>Congratulations! You won! Press "New Game" to start again.</p> : null}
			</div>

			<h1 className="title">Tenzies</h1>

			<p className="instructions">
				Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
			</p>

			<div className="dice-container">
				{diceElements}
			</div>

			<button ref={buttonRef} className="roll-dice" onClick={rollDice}>
				{gameWon ? "New Game" : "Roll"}
			</button>

        </main>
    )
}