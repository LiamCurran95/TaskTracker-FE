import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as api from "../api";
import { UserContext } from "../context/userContext";

export default function CreateUser() {
	const navigate = useNavigate();
	const [newUser, setNewUser] = useState(true);
	const { loggedInUser, setLoggedInUser } = useContext(UserContext);

	const createNewUser = (e) => {
		e.preventDefault();
		if (!newUser.username || !newUser.password || !newUser.email)
			alert("Please fill all fields");
		else {
			return api.createNewLogin(newUser).then((res) => {
				if (res === 201) {
					setLoggedInUser(newUser);
					setNewUser(false);
					navigate("/home-page", { replace: true });
				}
			});
		}
	};

	return (
		<div className="new-user">
			<form
				className="new-user-form"
				onSubmit={(event) => {
					createNewUser(event);
				}}
			>
				<h1>New User</h1>
				<label>
					Username
					<input
						type="text"
						onChange={(e) => {
							setNewUser({ ...newUser, username: e.target.value });
						}}
					></input>
				</label>
				<br></br>
				<label>
					e-mail
					<input
						type="text"
						onChange={(e) => {
							setNewUser({ ...newUser, email: e.target.value });
						}}
					></input>
				</label>
				<br></br>
				<label>
					password
					<input
						type="text"
						onChange={(e) => {
							setNewUser({ ...newUser, password: e.target.value });
						}}
					></input>
				</label>
				<br></br>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}
