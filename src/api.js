const axios = require("axios");

const ToDoAPI = axios.create({
	baseURL: "https://lc-tasktracker.herokuapp.com/",
});

export const fetchUsers = () => {
	return ToDoAPI.get("/api/users").then((result) => {
		return result;
	});
};

export const createNewLogin = (loggedInUser) => {
	return ToDoAPI.post("/api/users", { newUser: loggedInUser }).then((res) => {
		if (res.status === 201) return res.status;
		else return "Error";
	});
};

export const verifyUserLogin = (user) => {
	console.log({ login: user });
	return ToDoAPI.post("/api/users/login", { login: user }).then((res) => {
		return res;
	});
};

export const getTasksByUser = (username) => {
	return ToDoAPI.get(`/api/tasks/${username}`, username).then((res) => {
		return res.data.tasks;
	});
};
