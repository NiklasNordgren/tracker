import { faker } from 'ember-cli-mirage';

export default [
  {id: 1, fName: 'Todd', lName: "Gandee", email: faker.internet.email()},
  {id: 2, fName: 'Chris', lName: "Aquino", email: faker.internet.email()},
  {id: 3, fName: 'Jonanthan', lName: "Martin", email: faker.internet.email()}
];
