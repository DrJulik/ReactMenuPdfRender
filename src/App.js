import React from "react";
import { GlobalProvider } from "./context/GlobalState";
import "./App.css";
import MenuWrapper from "./components/MenuWrapper";

function App() {
	return (
		<GlobalProvider>
			<div className="App">
				<MenuWrapper />
			</div>
		</GlobalProvider>
	);
}

export default App;
