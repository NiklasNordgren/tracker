import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let witnessRecord = this.store.createRecord('witness', {
      fName: "Todd",
      lName: "Gandee",
      email: "fake@bignerdranch.com"
    });

    //Bronze Challenge: Changing the Computed Property
    console.log(witnessRecord.firstNameAndEmail);

    return [witnessRecord];
  }
});
