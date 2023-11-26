import React from "react";
import PropTypes from "prop-types";
import styles from "./Information.layout.module.css";

const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
	let info = "";

	if (isDraw) {
		info = "Ничья";
	} else if (isGameEnded) {
		info = isDraw ? "Ничья" : `Победа: ${currentPlayer}`;
	} else {
		info = `Ходит: ${currentPlayer}`;
	}

	return (
		<div className={styles.infoContainer}>
			<p className={styles.gameInfo}>{info}</p>
		</div>
	);
};

InformationLayout.propTypes = {
	currentPlayer: PropTypes.string.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
};

export default InformationLayout;
