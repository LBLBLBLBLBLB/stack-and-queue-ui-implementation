import styles from '../styles/Button.module.css';

const Button = (props) => {

	return (
		<>
			<button className={styles.button} style={props.style} onClick={props.handleClick}>
				{props.text}
			</button>
		</>
	)
}

export default Button;