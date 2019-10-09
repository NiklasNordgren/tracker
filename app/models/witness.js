import DS from 'ember-data';
import {
  computed
} from '@ember/object';

const {
  Model
} = DS;

export default Model.extend({
  fName: DS.attr('string'),
  lName: DS.attr('string'),
  email: DS.attr('string'),
  sightings: DS.hasMany('sighting'),

  fullName: computed('fName', 'lName', function() {
    return this.get('fName') + ' ' + this.get('lName');
  }),

  //Bronze Challenge: Changing the Computed Property
  firstNameAndEmail: computed('fName', 'lName', function() {
    return this.get('fName') + ' - ' + this.get('email');
  })


});
