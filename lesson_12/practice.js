const starWarsHeroes = [
  { name: "Anakin Skywalker", age: 30, isJedi: true },
  { name: "Luke Skywalker", age: 25, isJedi: true },
  { name: "Han Solo", age: 35, isJedi: false },
  { name: "Princess Leia", age: 30, isJedi: false },
  { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];
//1
const starWarsHeroesNew = starWarsHeroes.map((hero) => {
  return {
    name: hero.name,
    isJedi: hero.isJedi,
  };
});

console.log(starWarsHeroesNew);

//1.2
const starWarsOldHeroes = starWarsHeroes.filter((hero) => hero.age < 40);

console.log(starWarsOldHeroes);

//1.3

const sum = starWarsHeroes.reduce((acc, hero) => {
  return acc + hero.age;
}, 0);

console.log(sum);

//1.4
const starWarsHeroes10YearsOlder = starWarsHeroes.map((hero) => {
  return {
    ...hero,
    age: addAge(hero.age),
  };
});

function addAge(age) {
  return age + 10;
}

console.log(starWarsHeroes10YearsOlder);

//1.5
const newStarWarsHero = starWarsHeroes.map((hero) => {
  if (hero.name === "Anakin Skywalker") {
    (hero.name = "Darth Vader"), (hero.isJedi = false), (hero.age = 50);
  }
  return {
    ...hero,
  };
});

console.log(newStarWarsHero);
