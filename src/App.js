import React from "react";
import { GlobalProvider } from "./context/GlobalState";
import "./App.css";
import MenuWrapperFunc from "./components/MenuWrapperFunc";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Options from "./components/Options";

function App() {
	return (
		<GlobalProvider>
			<Router>
				<div className="App">
					<Header />

					<Switch>
						<Route exact path="/" component={MenuWrapperFunc} />
						<Route exact path="/about" component={About} />
						<Route exact path="/options" component={Options} />
					</Switch>
				</div>
			</Router>
		</GlobalProvider>
	);
}

export default App;
