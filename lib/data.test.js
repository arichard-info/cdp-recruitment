const { filterByAnimal, countEntities } = require("./data");

describe("data functions", () => {
  describe("#filterByAnimal", () => {
    it("should filter countries with people who have animals with names matching the given string (insensitive)", () => {
      const mockData = [
        {
          name: "Country 1",
          people: [
            {
              name: "Person 1",
              animals: [{ name: "Lion" }, { name: "Tiger" }],
            },
          ],
        },
        {
          name: "Country 2",
          people: [
            {
              name: "Person 2",
              animals: [{ name: "Elephant" }],
            },
            {
              name: "Person 3",
              animals: [{ name: "GIraffe" }],
            },
          ],
        },
        {
          name: "Country 3",
          people: [
            {
              name: "Person 4",
              animals: [],
            },
          ],
        },
      ];
      const result = filterByAnimal(mockData, "i");
      expect(result).toEqual([
        {
          name: "Country 1",
          people: [
            {
              name: "Person 1",
              animals: [{ name: "Lion" }, { name: "Tiger" }],
            },
          ],
        },
        {
          name: "Country 2",
          people: [
            {
              name: "Person 3",
              animals: [{ name: "GIraffe" }],
            },
          ],
        },
      ]);
    });

    it("should return an empty array if no match is found", () => {
      const mockData = [
        {
          name: "Country 1",
          people: [
            {
              name: "Person 1",
              animals: [{ name: "Lion" }, { name: "Tiger" }],
            },
          ],
        },
        {
          name: "Country 2",
          people: [
            {
              name: "Person 2",
              animals: [{ name: "Elephant" }],
            },
            {
              name: "Person 3",
              animals: [{ name: "Giraffe" }],
            },
          ],
        },
        {
          name: "Country 3",
          people: [
            {
              name: "Person 4",
              animals: [],
            },
          ],
        },
      ];
      const result = filterByAnimal(mockData, "z");
      expect(result).toEqual([]);
    });
  });

  describe("#countEntities", () => {
    it("should append the number of people to each country name", () => {
      const mockData = [
        {
          name: "Country 1",
          people: [
            {
              name: "Person 1",
              animals: [{ name: "Animal 1" }, { name: "Animal 2" }],
            },
          ],
        },
        {
          name: "Country 2",
          people: [
            {
              name: "Person 2",
              animals: [],
            },
            {
              name: "Person 3",
              animals: [{ name: "Animal 3" }],
            },
          ],
        },
        {
          name: "Country 3",
          people: [],
        },
      ];
      const result = countEntities(mockData);
      expect(result[0].name).toEqual("Country 1 [1]");
      expect(result[1].name).toEqual("Country 2 [2]");
      expect(result[2].name).toEqual("Country 3 [0]");
    });

    it("should append the number of people to each people name", () => {
      const mockData = [
        {
          name: "Country 1",
          people: [
            {
              name: "Person 1",
              animals: [{ name: "Animal 1" }, { name: "Animal 2" }],
            },
          ],
        },
        {
          name: "Country 2",
          people: [
            {
              name: "Person 2",
              animals: [],
            },
            {
              name: "Person 3",
              animals: [{ name: "Animal 3" }],
            },
          ],
        },
        {
          name: "Country 3",
          people: [],
        },
      ];
      const result = countEntities(mockData);
      expect(result[0].people[0].name).toEqual("Person 1 [2]");
      expect(result[1].people[0].name).toEqual("Person 2 [0]");
      expect(result[1].people[1].name).toEqual("Person 3 [1]");
    });
  });
});
