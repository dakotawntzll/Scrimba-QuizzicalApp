import {useState, useRef, useEffect} from "react"
import QuestionSection from "./components/QuestionSection .jsx"
// import {nanoid} from "nanoid"

export default function App(){

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