import React from "react";
import { heroes } from "../../data/heroes";
import { HeroCard } from "../heroes/HeroCard";
import { useForm } from "../../hooks/useForm";

export const SearchScreen = () => {
	const heroesFiltered = heroes;
	const [formValues, handleInputChange, reset] = useForm({
		searchText: "",
	});
	const { searchText } = formValues;
	const handleSearch = (e) => {
		e.preventDefault();
		console.log(searchText);
		reset();
	};
	return (
		<div>
			<h1>SearchScreen</h1>
			<hr />
			<div className="row">
				<div className="col-5">
					<h4>Search form</h4>
					<form onSubmit={handleSearch}>
						<input
							type="text"
							placeholder="Find You Hero"
							className="form-control"
							name="searchText"
							value={searchText}
							onChange={handleInputChange}
						/>
						<button
							type="submit"
							className="btn m-1 btn-block btn-outline-primary"
						>
							Search ...
						</button>
					</form>
				</div>
				<div className="col-7">
					<h4>Results</h4>
					<hr />
					{heroesFiltered.map((hero) => (
						<HeroCard key={hero.id} {...hero} />
					))}
				</div>
			</div>
		</div>
	);
};
