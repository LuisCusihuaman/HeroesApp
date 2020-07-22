import React from "react";
import { mount } from "enzyme";
import { PrivateRoute } from "../../routers/PrivateRoute";
import { MemoryRouter } from "react-router-dom";
describe("Pruebas en <PrivateRoute/>", () => {
	test("debe de mostrar el componente si esta autenticado y guardar en localStorage", () => {
		const props = {
			location: {
				pathname: "/marvel",
			},
		};
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
});
