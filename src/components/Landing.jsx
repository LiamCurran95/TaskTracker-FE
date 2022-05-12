import { Link } from "react-router-dom";

export default function Landing() {
	return (
		<div className="landing-page">
			<h1>Welcome toDo</h1>
			<Link to="/login">
				<button>Login</button>
			</Link>
			<Link to="/create-user">
				<button>Create account</button>
			</Link>
		</div>
	);
}
