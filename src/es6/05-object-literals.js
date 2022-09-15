//Enahcef object Literals

function newUser(user, age, conutry, UId) {
  return {
    user,
    age,
    conutry,
    id: UId,
  };
}

console.log(newUser('gndx', 34, 'MX', 1));
