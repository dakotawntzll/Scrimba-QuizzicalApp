import {useState, useRef, useEffect} from "react"
import QuestionSection from "./components/QuestionSection .jsx"
// import {nanoid} from "nanoid"

export default function App(){

	// Will need to set state for these things
	// 	- What stage the app is on
	// 		- When the app loads on the "welcome" splash screen (maybe use a full screen modal?)
	
	// Things I might need state for	
	// 	- array from quiz Api
	// 		- Will need use useEffect. Watch scrimba video on the api calls 
	// 	- Choices/ results from form (does this need to useEffect?) 
	// 		- Look up scrimba video for this
		
	// Dervived values 
	// 	- Number of right Choices

	// Functions needed
	// 		- function to get choices from the form
	// 		- Function to check each choice and if it was correct to calculate correct choices
	//			- We might have to check if choice is right twice. Once to calculate the score and another when rendering the quiz results
	//		- Function to reset everything 
	// 		
	
	
	// Will need to map through the questions returned from api
	// On each element, need to create a <QuestionSection  /> component
	// Needs to be passed these things
	//	- Question
	//	- Wrong choices
	// 	- Right Answer
	// 	- Stage of the app (to know if to reveal answers)
	// 	- questions index
	//	- What choice the user entered (this will need to be optional and only used on "display results" stage and wont exist before then)
	//		- might need to look into how to have optional parameter
	// 
	// The <QuestionSection  /> component will have to randomize an array filled with correct and incorrect choices
	// 	- google how to randomize array again for algorithm. Maybe store in a util.js
	//
	// Will need to decode the response from api with html decode or something 
	//
	// When the stage is on the "quiz" stage, we simply display questions, with randomized order for the choices
	// 
	// When the stage is on "reveal" we need to disable all radio buttons, check if the user's entered value is correct
	// If it is correct, we simply show it with the "correct" class
	// If incorrect, we show the right answer with the "correct" class and show the choice with the "incorrect" class

	// Have the ending results show by the button on stage "reveal"





    return (
		<main>
			<form>
				<QuestionSection  />

				<div className="btn-and-results-container">
					<h3 id="resultsText">You scored 3/5 correct answers</h3>
					<button type="submit" id="submitBtn">Check Answers</button>
				</div>
			</form>
		</main>
    )
}