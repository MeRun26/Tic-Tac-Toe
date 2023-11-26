import React from "react";
import PropTypes from "prop-types";
import styles from "./Game.layout.module.css";
import FieldContainer from "./Field.container.module";
import InformationContainer from "./Information.container.module";

const GameLayout = ({
	currentPlayer,
	isGameEnded,
	isDraw,
	field,
	handleCellClick,
	handleRestart,
}) => {
	return (
		<div className={styles.gameContainer}>
			<InformationContainer
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			<FieldContainer field={field} handleCellClick={handleCellClick} />
			<button className={styles.restartButton} onClick={handleRestart}>
				Начать заново
			</button>
		</div>
	);
};

GameLayout.propTypes = {
	currentPlayer: PropTypes.string.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	handleCellClick: PropTypes.func.isRequired,
	handleRestart: PropTypes.func.isRequired,
};

export default GameLayout;
