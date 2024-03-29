import Controller from '@ember/controller';
import {
  computed,
  set
} from '@ember/object';

export default Controller.extend({
  sighting: computed.alias('model.sighting'),
  actions: {
    update() {
      if (this.get('sighting').get('hasDirtyAttributes')) {

        //Silver Challenge: Sighting Date
        let sighting = this.get('sighting');
        let sightingDate = sighting.sightedAt;
        let date = new Date(sightingDate);
        set(sighting, 'sightedAt', date);

        sighting.save().then(() => {
          this.transitionToRoute('sightings');
        });
      }
    },
    cancel() {
      if (this.get('sighting').get('hasDirtyAttributes')) {
        this.get('sighting').rollbackAttributes();
      }
      this.transitionToRoute('sightings');
    },
    delete() {
      var self = this;
      if (window.confirm("Are you sure you want to delete this sighting?")) {
        this.get('sighting').destroyRecord().then(() => {
          self.transitionToRoute('sightings');
        });
      }
    }
  }
});
