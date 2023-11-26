import React from "react";
import PropTypes from "prop-types";
import styles from "./Field.layout.module.css";

// const winLineClass = isGameEnded ? "win-line" : ""; //УСТАЛ ))) не будет победной линии

const FieldLayout = ({ field, handleCellClick }) => {
	return (
		<div className={styles.fieldcontainer}>
			{field.map((cell, index) => (
				<button
					key={index}
					onClick={() => handleCellClick(index)}
					disabled={cell !== ""}
					className={`${styles.cell} ${
						cell === "X" ? styles.X : styles.O
					}`}
				>
					{cell}
				</button>
			))}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	handleCellClick: PropTypes.func.isRequired,
};

export default FieldLayout;
