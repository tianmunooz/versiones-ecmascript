const regex = /\b(Apple)+\b/g;
const fruit = 'Apple, Banana, Orange, Apple, etc, etc';

for (const match of fruit.matchAll(regex)) {
  console.log(match);
}
