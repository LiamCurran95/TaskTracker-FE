import { useState, useContext, useEffect } from "react";
import * as api from "../api";
import { UserContext } from "../context/userContext";
import { DataGrid } from "@mui/x-data-grid";

export default function HomePage() {
	const { loggedInUser } = useContext(UserContext);
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		return api.getTasksByUser(loggedInUser.username).then((tasks) => {
			setTasks(tasks);
		});
	}, []);

	const columns = [
		{ field: "task", headerName: "Task", width: 70 },
		{ field: "complete", headerName: "Complete", width: 70 },
		{ field: "created", headerName: "Task Created", width: 70 },
	];

	const rows = tasks.map((task) => {
		delete task.username;
	});

	return (
		<div>
			<h1>Welcome {loggedInUser.username}</h1>
			<div style={{ height: 400, width: "100%" }}>
				<DataGrid
					rows={rows}
					columns={columns}
					pageSize={5}
					rowsPerPageOptions={[5]}
					checkboxSelection
				/>
			</div>
		</div>
	);
}
