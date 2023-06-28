import styles from '../styles/Header.module.css';

const Header = (props) => {
	return (<><h3 className={styles.headerText}>{props.header}</h3></>)
}

export default Header;