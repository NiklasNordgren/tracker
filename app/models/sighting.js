import DS from 'ember-data';
const {
  Model
} = DS;

export default Model.extend({
  //Silver Challenge: Flagging New Sightings
  //isNew : DS.attr('boolean', { defaultValue: false }),
  location: DS.attr('string'),
  createdAt: DS.attr('date'),
  sightedAt: DS.attr('date'),
  cryptid: DS.belongsTo('cryptid'),
  witnesses: DS.hasMany('witness')
});
