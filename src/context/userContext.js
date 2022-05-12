import { createContext, useState } from "react";
export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
	const [loggedInUser, setLoggedInUser] = useState(null);

	return (
		<UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
			{children}
		</UserContext.Provider>
	);
};
