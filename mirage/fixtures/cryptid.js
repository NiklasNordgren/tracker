import { faker } from 'ember-cli-mirage';

export default [
  {id: 1, name: 'Aaron', cryptidType: "Nerd", profileImg: faker.internet.avatar()},
  {id: 2, name: 'Chewy', cryptidType: "Chupacabra", profileImg: faker.internet.avatar()},
  {id: 3, name: 'Nessy', cryptidType: "Loch Ness Monster", profileImg: faker.internet.avatar()},
  {id: 4, name: 'Harry', cryptidType: "Sasquatch", profileImg: faker.internet.avatar()}
];
