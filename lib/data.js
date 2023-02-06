/** @typedef { import("./types").Country } Country */

/**
 * filters countries with people who have animals with names matching the given string
 * @param {Country[]} data
 * @param {string} str
 * @returns {Country[]}
 */
const filterByAnimal = (data, str) => {
  const re = new RegExp(str, "i");

  return data.filter((country) => {
    country.people = country.people.filter((person) => {
      person.animals = person.animals.filter((animal) => animal.name.match(re));
      return person.animals.length > 0;
    });
    return country.people.length > 0;
  });
};

/**
 * Counts the number of people / animals and appends it after each country / people name
 * @param {Country[]} data
 * @returns {Country[]}
 */
const countEntities = (data) => {
  return data.map((country) => {
    country.people = country.people.map((person) => {
      person.name = `${person.name} [${person.animals.length || 0}]`;
      return person;
    });
    country.name = `${country.name} [${country.people.length || 0}]`;
    return country;
  });
};

module.exports = { filterByAnimal, countEntities };
