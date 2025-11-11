export default function SplashScreen(props) {
	return (
		<div className="splash-screen">
			<h1>Quizzical</h1>
			<p>Test yourself</p>
			<button onClick={props.getQuizData} className="btn">Start Quiz</button>
		</div>
	)
}