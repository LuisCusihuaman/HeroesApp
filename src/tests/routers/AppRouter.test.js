const { mount } = require("enzyme");
import React from "react";
import { AppRouter } from "../../routers/AppRouter";
import { AuthContext } from "../../auth/authContext";

describe("Pruebas en <AppRouter />", () => {
	const contextValue = {
		dispatch: jest.fn(),
		user: { logged: false },
	};
	test("debe de mostrar login si no esta autenticado", () => {
		const wrapper = mount(
			<AuthContext.Provider value={contextValue}>
				<AppRouter />
			</AuthContext.Provider>
		);
		expect(wrapper).toMatchSnapshot();
	});
	test("debe de mostrar el componente de marvel si esta autenticado", () => {
		const contextValue = {
			dispatch: jest.fn(),
			user: { logged: true, name: "Luis" },
		};
		const wrapper = mount(
			<AuthContext.Provider value={contextValue}>
				<AppRouter />
			</AuthContext.Provider>
		);
		expect(wrapper.find(".navbar").exists()).toBe(true);
	});
});
