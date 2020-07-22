import React from "react";
import { mount } from "enzyme";
import { PrivateRoute } from "../../routers/PrivateRoute";
import { MemoryRouter } from "react-router-dom";
describe("Pruebas en <PrivateRoute/>", () => {
	const props = {
		location: {
			pathname: "/marvel",
		},
	};
	test("debe de mostrar el componente si esta autenticado y guardar en localStorage", () => {
		Storage.prototype.setItem = jest.fn();
		const wrapper = mount(
			<MemoryRouter>
				<PrivateRoute
					isAuthenticated={true}
					component={() => <span>Listo</span>}
					{...props}
				/>
			</MemoryRouter>
		);
		expect(wrapper.find("span").exists()).toBe(true);
		expect(localStorage.setItem).toHaveBeenCalledWith(
			"lastPath",
			props.location.pathname
		);
	});
	test("debe de bloquear el componente si no esta autenticado", () => {
		const wrapper = mount(
			<MemoryRouter>
				<PrivateRoute
					isAuthenticated={false}
					component={() => <span>Listo</span>}
					{...props}
				/>
			</MemoryRouter>
		);
		expect(wrapper.find("span").exists()).toBe(false);
		expect(localStorage.setItem).toHaveBeenCalledWith(
			"lastPath",
			props.location.pathname
		);
	});
});
