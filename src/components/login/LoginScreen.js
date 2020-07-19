import React, { useContext } from "react";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {
	const { dispatch } = useContext(AuthContext);
	const handleLogin = () => {
		dispatch({
			type: types.login,
			payload: {
				name: "Luis",
			},
		});
		history.replace("/"); //await all task syncs
	};
	return (
		<div className="container mt-5">
			<h1>Login</h1>
			<hr />

			<button className="btn btn-primary" onClick={handleLogin}>
				Login
			</button>
		</div>
	);
};
