// App.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import Utama from "./components/Utama";
import { Link } from "react-router-dom";
import React from "react";

function App() {
	return (
		<div>
			apacova
			<hr />
			<Link to="/bmi">be em i</Link>
			<Link to="/cicilan">cicil bank</Link>
			<Link to="/diskon">diskon kalk</Link>
			<Link to="/conversion">konvers bilang</Link>
			<hr />
			<span>
				<Utama />
			</span>
		</div>
	);
}

export default App;
