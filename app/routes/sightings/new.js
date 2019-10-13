import Route from '@ember/routing/route';
import {
  hash
} from 'rsvp';
import {
  computed,
  set
} from '@ember/object';


export default Route.extend({
  model() {
    return hash({
      sighting: this.store.createRecord('sighting'),
      cryptids: this.store.findAll('cryptid'),
      witnesses: this.store.findAll('witness')
    });
  },

  sighting: computed.alias('controller.model.sighting'),
  actions: {
    willTransition() {
      var sighting = this.get('controller.model.sighting');
      if (sighting.get('hasDirtyAttributes')) {
        sighting.deleteRecord();
      }
    },
    create() {
      var self = this;

      //Silver Challenge: Sighting Date
      let sighting = this.get('sighting');
      let sightingDate = sighting.sightedAt;
      let date = new Date(sightingDate);
      set(sighting, 'sightedAt', date);

      sighting.save().then(function() {
        //Bronze Challenge: Customizing the Alert Message
        self.send('flash', {alertType: "success", message: "New sighting. " + sighting.location + ", " + sightingDate});
        self.transitionTo('sightings');
      });

    },
    cancel() {
      this.get('sighting').deleteRecord();
      this.transitionTo('sightings');
    },
    didMakeWitnessSelection(value) {
      this.get('sighting').set('witnesses', value);
    },
    didMakeCryptidSelection(value) {
      this.get('sighting').set('cryptid', value);
    }
  }
});
