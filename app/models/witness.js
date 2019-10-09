import DS from 'ember-data';
import {
  computed
} from '@ember/object';

const {
  Model
} = DS;

export default Model.extend({
  //Gold Challenge: Adding Titles
  title: DS.attr('string', { defaultValue: "Mahatma" }),
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
  }),

  //Gold Challenge: Adding Titles
  titleName: computed('title', 'lName', function() {
    return this.get('title') + ' ' + this.get('lName');
  })


});
