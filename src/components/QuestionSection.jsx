import { STAGES } from "../js/stages";
import he from "he"	

export default function QuestionSection (props){

	const choicesElements = props.choices.map((choice, index) => {
		let className = ""

		if(props.gameStage === STAGES.RESULTS){
			const isCorrect = choice === props.correctAnswer
			const isUserAnswer = choice === props.userAnswer
			
			if (isCorrect){
				className = "correct"
			} else if (isUserAnswer) {
				className = "incorrect"
			}
		}

		return (
			<li key={`question${props.questionIndex}Choice${index}`}>
				
				<input 
					type="radio" 
					id={`question${props.questionIndex}Choice${index}`} 
					name={`question${props.questionIndex}`} 
					value={choice} required
					disabled={props.gameStage === STAGES.RESULTS ? true : false}
				/>
				
				<label htmlFor={`question${props.questionIndex}Choice${index}`} className={className}>
					{he.decode(choice)}
				</label>

			</li>
		)
	})

	return (
		<section className="question-section">

			<h2 className="question-text" id={`question${props.questionIndex}-label`}>
				{he.decode(props.question)}
			</h2>

			<p id={`question${props.questionIndex}-help`} className="sr-only">
				Select one answer. Use arrow keys to move between options. Use spacebar to select option.
			</p>

			<ul 
				className="choices" 
				role="radiogroup" 
				aria-labelledby={`question${props.questionIndex}-label`} 
				aria-describedby={`question${props.questionIndex}-help`}
			>
				
				{choicesElements}

			</ul>
		</section>
	)
}