import React from "react";
import { mount } from "enzyme";
import { DashboardRoutes } from "../../routers/DashboardRoutes";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";

describe("Pruebas en <DashboardRoutes/>", () => {
	const contextValue = {
		dispatch: jest.fn(),
		user: { logged: true, name: "Luis" },
	};
	test("debe demostrarse correctactamente ", () => {
		const wrapper = mount(
			<MemoryRouter>
				<AuthContext.Provider value={contextValue}>
					<DashboardRoutes />
				</AuthContext.Provider>
			</MemoryRouter>
		);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find(".text-info").text().trim()).toBe("Luis");
	});
});
