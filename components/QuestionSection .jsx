export default function QuestionSection (){
	return (
		<section className="question-section">

			<h2 className="question-text" id="question1-label">How would one say goodbye in Spanish?</h2>

			<p id="question1-help" className="sr-only">
				Select one answer. Use arrow keys to move between options. Use spacebar to select option.
			</p>

			<ul className="choices" 
				role="radiogroup" aria-labelledby="question1-label" aria-describedby="question1-help"
			>

				<li>
					<input type="radio" id="question1Choice1" name="question1" value="Adios" required/>
					<label htmlFor="question1Choice1">Adios</label>
				</li>
				<li>
					<input type="radio" id="question1Choice2" name="question1" value="Hola"/>
					<label htmlFor="question1Choice2">Hola</label>
				</li>
				<li>
					<input type="radio" id="question1Choice3" name="question1" value="Au Revoir"/>
					<label htmlFor="question1Choice3">Au Revoir</label>
				</li>
				<li>
					<input type="radio" id="question1Choice4" name="question1" value="Salir"/>
					<label htmlFor="question1Choice4">Salir</label>
				</li>


			</ul>
		</section>
	)
}