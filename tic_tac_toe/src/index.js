import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import GameContainer from "./Components/Game.container.module";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	<GameContainer />
	//<GameLauout />
	// <FieldContainer />
	// <FieldLayout />
	// <InformationContainer />
	// <InformationLayout />
	//</React.StrictMode>
);
reportWebVitals();
