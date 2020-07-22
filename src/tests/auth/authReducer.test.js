const { types } = require("../../types/types");
const { authReducer } = require("../../auth/authReducer");

describe("Pruebas en authReducer", () => {
	test("debe de retornar el estado por defecto", () => {
		const state = authReducer({ logged: false }, {});
		expect(state).toEqual({ logged: false });
	});
	test("debe de authenticar y colocar el name del usuario", () => {
		const action = {
			type: types.login,
			payload: { name: "Luis" },
		};
		const state = authReducer({ logged: false }, action);
		expect(state).toEqual({ logged: true, name: "Luis" });
	});
	test("debe de borrar el name del usuario y logged en false", () => {
		const action = {
			type: types.logout,
		};
		const state = authReducer({ logged: true }, action);
		expect(state).toEqual({ logged: false });
	});
});
