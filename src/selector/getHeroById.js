const { heroes } = require("../data/heroes");

export const getHeroesById = (id) => heroes.find((hero) => hero.id === id);
