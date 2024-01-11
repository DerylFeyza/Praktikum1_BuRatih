// App.jsx
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BMI from "./components/BMI";
import CicilanBank from "./components/CicilanBank";
import Diskon from "./components/Diskon";
import Conversion from "./components/Conversions/Conversion";

class App extends Component {
	render() {
		return (
			<>
				<BMI></BMI>
				<CicilanBank></CicilanBank>;<Diskon></Diskon>
				<Conversion></Conversion>
			</>
		);
	}
}

export default App;
