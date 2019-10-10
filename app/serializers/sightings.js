import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  attrs: {
    isNew: { serialize: false }
  }
});
