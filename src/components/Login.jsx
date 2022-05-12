import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../api";
import { UserContext } from "../context/userContext";

export default function Login() {
	const navigate = useNavigate();
	const { setLoggedInUser } = useContext(UserContext);
	const [user, setUser] = useState("");

	const verifyLogin = (e) => {
		e.preventDefault();
		console.log(user);
		if (!user.username || !user.password) {
			alert("Please fill all fields");
		} else {
			return api.verifyUserLogin(user).then((res) => {
				if (res.data.msg === "Successfully logged in.") {
					setLoggedInUser(user);
					alert("success");
					navigate("/home-page", { replace: true });
				} else {
					alert(res.data.msg);
				}
			});
		}
	};

	return (
		<div className="login">
			<form
				className="login-form"
				onSubmit={(event) => {
					verifyLogin(event);
				}}
			>
				<h1>Login</h1>
				<br></br>
				<label>
					Username
					<input
						type="text"
						onChange={(e) => {
							setUser({ ...user, username: e.target.value });
						}}
					></input>
				</label>
				<label>
					Password
					<input
						type="text"
						onChange={(e) => {
							setUser({ ...user, password: e.target.value });
						}}
					></input>
				</label>
				<br></br>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}
