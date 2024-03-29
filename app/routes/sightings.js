import Route from '@ember/routing/route';

export default Route.extend({

  model() {

    /*
    let record1 = this.store.createRecord('sighting', {
      //Silver Challenge: Flagging New Sightings
      isNew: true,
      location: 'Atlanta',
      sightedAt: new Date('2016-02-09')
    });
    let record2 = this.store.createRecord('sighting', {
      location: 'Calloway',
      sightedAt: new Date('2016-03-14')
    });
    let record3 = this.store.createRecord('sighting', {
      location: '',
      sightedAt: new Date('2016-03-21')
    });
    return [record1, record2, record3];
    */
    return this.store.findAll('sighting', {reload: true});
  }

});
