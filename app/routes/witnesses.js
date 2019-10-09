import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let witnessRecord1 = this.store.createRecord('witness', {
      //Gold Challenge: Adding Titles
      title: "Mr.",
      fName: "Todd",
      lName: "Gandee",
      email: "fake@bignerdranch.com"
    });

    let witnessRecord2 = this.store.createRecord('witness', {
      fName: "Jon",
      lName: "Snow",
      email: "got@thewall.com"
    });

    //Bronze Challenge: Changing the Computed Property
    console.log(witnessRecord1.firstNameAndEmail);

    return [witnessRecord1, witnessRecord2];
  }
});
