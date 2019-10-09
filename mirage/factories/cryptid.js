import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.hacker.noun();
  },
  cryptidType() {
    return faker.name.jobTitle();
  },
  profileImg() {
    return faker.internet.avatar;
  }
});
