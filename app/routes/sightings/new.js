import Route from '@ember/routing/route';
import {
  hash
} from 'rsvp';

export default Route.extend({
  model() {
    return hash({
      sighting: this.store.createRecord('sighting'),
      cryptids: this.store.findAll('cryptid'),
      witnesses: this.store.findAll('witness')
    });
  }
});
