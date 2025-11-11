import {useState} from "react"
import QuestionSection from "./QuestionSection.jsx"
import SplashScreen from "./SplashScreen.jsx"
import { shuffle } from "../js/util.js"
import { STAGES } from "../js/stages.js";
import {nanoid} from "nanoid"

export default function App(){

	// States
	const [gameStage, setGameStage] = useState(STAGES.SPLASH) 
	const [quizData, setQuizData] = useState([])
	const [userAnswers, setUserAnswers] = useState({})
	
	// Derived Variables
	const questionsCorrect = checkScore()

	// Create Elements
	const quizQuestionsElements = quizData.map((question, index) => (
		<QuestionSection  
			key={question.id}
			question={question.question}
			choices={question.choices}
			correctAnswer={question.correct_answer}
			gameStage={gameStage}
			questionIndex={index}
			userAnswer={userAnswers[`question${index}`]}
		/>
	))


	function getQuizData() {
		fetch("https://opentdb.com/api.php?amount=5&type=multiple")
			.then(res => res.json())
			.then(data => {
				
				const dataWithShuffle = data.results.map((question, index) => {
					const choices = [...question.incorrect_answers, question.correct_answer]
					shuffle(choices)
					
					return {...question, choices, id: nanoid()}
				})
				

				setQuizData(dataWithShuffle)
				setGameStage(STAGES.QUIZ)
			})
			.catch(err => console.error("Failed to fetch quiz data:", err));
	}

	function getUserAnswers(formData){
		setUserAnswers(Object.fromEntries(formData))
		setGameStage(STAGES.RESULTS)
	}

	function checkScore(){
		if (gameStage === STAGES.RESULTS) {
			return quizData.reduce((sum, current, index) => ( 
				sum + (userAnswers[`question${index}`] === current.correct_answer ? 1 : 0) 
			), 0)
		} else {
			return 0
		}
	}

	function handleSubmit(event){
		event.preventDefault()
		if (gameStage === STAGES.QUIZ){
			const formData = new FormData(event.target)
			getUserAnswers(formData)
			event.target.reset()
		} else if (gameStage === STAGES.RESULTS){
			getQuizData()
		}
	}
	
    return (
		<main>

			{gameStage === STAGES.SPLASH && <SplashScreen getQuizData={getQuizData}/>}

			{gameStage !== STAGES.SPLASH && (
				<form onSubmit={handleSubmit}>
					{quizQuestionsElements}

					<div className="btn-and-results-container">
						{gameStage === STAGES.RESULTS && <h3 id="resultsText">You scored {questionsCorrect}/{quizData.length} correct answers</h3>}
						<button 
							type="submit" 
							id="submitBtn" 
							className="btn">{gameStage === STAGES.QUIZ ? "Check Answers" : "Play Again"}</button>
					</div>

				</form>
			)}

		</main>
    )
}