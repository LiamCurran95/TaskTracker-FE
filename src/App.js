import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import CreateUser from "./components/CreateUser";
import HomePage from "./components/HomePage.jsx";
import Login from "./components/Login";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/create-user" element={<CreateUser />} />
					<Route path="/login" element={<Login />} />
					<Route path="/home-page" element={<HomePage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
