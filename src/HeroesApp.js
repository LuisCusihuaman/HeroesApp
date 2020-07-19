import React, { useReducer, useEffect } from "react";
import { AppRouter } from "./routers/AppRouter";
import { AuthContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";

const init = () =>
	JSON.parse(localStorage.getItem("user")) || { logged: false };

export const HeroesApp = () => {
	const [user, dispatch] = useReducer(authReducer, {}, init);
	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(user));
	}, [user]);
	return (
		<AuthContext.Provider value={{ user, dispatch }}>
			<AppRouter />
		</AuthContext.Provider>
	);
};
