const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};

const {first: firstName,last,city,zip, siblings:{sister:favsibling}} = bob;

console.log(firstName,last,city,zip, favsibling);