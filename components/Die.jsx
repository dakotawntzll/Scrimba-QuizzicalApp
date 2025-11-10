export default function Die (props) {
	return (
		<button
			className={props.isHeld ? "die held" : "die"}
			onClick={props.holdFunction}
			aria-pressed={props.isHeld}
			aria-label={`Die with the value of ${props.value} and is currently ${props.isHeld ? "" : "not"} being held`}
		>

			{props.value}

		</button>
	)
}