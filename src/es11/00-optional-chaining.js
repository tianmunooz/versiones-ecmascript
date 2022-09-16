const users = {
  gndx: {
    country: 'MX',
  },
  ana: {
    country: 'CO',
  },
};

console.log(users.gndx.country);
// MX

console.log(users.bebeloper.country);
//error --> No se puede encontrar el argumento

console.log(users?.bebeloper?.country);
