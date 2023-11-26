import React, { useState } from "react";
import FieldContainer from "./Field.container.module";
import InformationContainer from "./Information.container.module";
import GameLayout from "./Game.layout.module";

const GameContainer = () => {
	const [currentPlayer, setCurrentPlayer] = useState("X");
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(""));

	const handleCellClick = (index) => {
		if (!isGameEnded && field[index] === "") {
			const newField = [...field];
			newField[index] = currentPlayer;
			setField(newField);
			checkWinner(newField, currentPlayer);
		}
	};

	const handleRestart = () => {
		setCurrentPlayer("X");
		setIsGameEnded(false);
		setIsDraw(false);
		setField(Array(9).fill(""));
	};

	const checkWinner = (currentField, player) => {
		const WIN_PATTERNS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8], // Варианты побед по горизонтали
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8], // Варианты побед по вертикали
			[0, 4, 8],
			[2, 4, 6], // Варианты побед по диагонали
		];

		// Проверяем каждый паттерн победы
		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [a, b, c] = WIN_PATTERNS[i];
			if (
				currentField[a] === player &&
				currentField[b] === player &&
				currentField[c] === player
			) {
				setIsGameEnded(true);
				setIsDraw(false); // Победитель найден, сбрасываем флаг ничьей
				return;
			}
		}

		// Проверяем, есть ли пустые клетки (если нет, то это ничья)
		if (!currentField.includes("")) {
			setIsGameEnded(true);
			setIsDraw(true);
			return;
		}
		setCurrentPlayer(player === "X" ? "O" : "X");

		if (isGameEnded) {
			setIsGameEnded(true);
			setIsDraw(false);
			// Не меняем текущего игрока, если есть победитель
			// setCurrentPlayer(currentPlayer);
		} else if (isDraw) {
			setIsGameEnded(true);
			setIsDraw(true);
			// Не меняем текущего игрока в случае ничьи
			// setCurrentPlayer(currentPlayer);
		}
	};

	return (
		<GameLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			field={field}
			handleCellClick={handleCellClick}
			handleRestart={handleRestart}
		>
			<FieldContainer field={field} handleCellClick={handleCellClick} />
			<InformationContainer
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
		</GameLayout>
	);
};
export default GameContainer;
