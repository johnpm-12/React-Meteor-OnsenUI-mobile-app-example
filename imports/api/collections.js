import { LocalCollection } from 'meteor/minimongo';
import { PersistentMinimongo2 } from 'meteor/frozeman:persistent-minimongo2';

const memoryCollection = new LocalCollection();

const persistentCollection = new LocalCollection();
new PersistentMinimongo2(persistentCollection);

memoryCollection.insert({ 'counter': 0 });
// console.log(persistentCollection.findOne({}));
// if (persistentCollection.findOne({}) === undefined) {
//     persistentCollection.insert({ 'counter': 0 });
// }

module.exports = {
    persistentCollection: persistentCollection,
    memoryCollection: memoryCollection
};
