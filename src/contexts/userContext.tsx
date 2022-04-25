import { useState, createContext } from "react";

const UserContext = createContext<any | null>(null)

export function UserProvider({ children }: any) {
	if (localStorage.getItem("user") === 'null') {
			localStorage.clear();
	}

	const persistedUser = JSON.parse(localStorage.getItem("user") as string)
	const [user, setUser] = useState(persistedUser);

	function login(userData: any) {
		setUser(userData)
		localStorage.setItem("user", JSON.stringify(userData))
	}

	function logout() {
		setUser("")
		localStorage.removeItem("user")
	}

	return (
		<UserContext.Provider value={{ user, login, logout }}>
			{children}
		</UserContext.Provider>
	)
}

export default UserContext