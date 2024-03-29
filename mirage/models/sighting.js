import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  witnesses: hasMany('witness'),
  cryptid: belongsTo()
});
