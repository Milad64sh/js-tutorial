const udemy = 'udemy';
const letters = [...udemy];
console.log(letters);


const boys = ['john','peter','bob'];
const girls = ['susan','anna'];
const bestfriend = 'arnold';

const friends = [...boys, bestfriend, ...girls];
console.log(friends);

const newFriends = [...friends];
newFriends[0] = 'karina';
console.log(newFriends);
console.log(friends);