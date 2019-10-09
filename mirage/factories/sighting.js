import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  location() {
    return `${faker.address.city()}, ${faker.address.state()}`;
  },
  createdAt() {
    return faker.date.recent();
  },
  sightedAt() {
    return faker.date.recent();
  }
});
