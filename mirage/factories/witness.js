import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  fName() {
    return faker.name.firstName();
  },
  lName() {
    return faker.name.lastName();
  },
  email(i) {
    return `email${i}@acme.com`;
  }
});
