export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);

  server.loadFixtures('witnesses');
  server.loadFixtures('cryptids');

  let witness1 = server.db.witnesses[0];
  let cryptid1 = server.db.cryptids[0];
  server.createList('sighting', 3, {cryptidId: cryptid1.id, witnessIds: [witness1.id]});

  let cryptid2 = server.db.cryptids[1];
  server.createList('sighting', 3, {cryptidId: cryptid2.id});

  let cryptid3 = server.db.cryptids[2];
  server.createList('sighting', 3, {cryptidId: cryptid3.id});
}
