const { heroes } = require("../data/heroes");

export const getHeroById = (id) => heroes.find((hero) => hero.id === id);
