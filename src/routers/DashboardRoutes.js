import React from "react";
import { Navbar } from "../components/ui/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { DcScreen } from "../components/dc/DcScreen";

export const DashboardRoutes = () => {
	return (
		<>
			<Navbar />
			<div className="container mt-2">
				<Switch>
					<Route
						exact
						path="/marvel"
						component={MarvelScreen}
					></Route>
					<Route
						exact
						path="/heroe/:heroeId"
						component={HeroScreen}
					></Route>
					<Route exact path="/dc" component={DcScreen}></Route>
					<Redirect to="/marvel" />
				</Switch>
			</div>
		</>
	);
};
