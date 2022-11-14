import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// export const putDb = async (content) => console.error('putDb not implemented');
export const putDb = async (id, content) => {
console.log('PUT to the database')

//Creation of a connection to the databse and the version
const db = await openDB ('jate', 1);

//Creation of a new transaction and we're specifying the database and data privileges 
const tx = db.transation('jate', 'readwrite');

//The object store open
const store = tx.objectStore('jate');

//Using .put() to pass in all the needed information
const request = store.put({id: id, data: content});

//Confirmation 
const result = await request;
console.log('🚀 - data saved to the database', result);
return result;
};

// TODO: Add logic for a method that gets all the content from the database
// export const getDb = async () => console.error('getDb not implemented');
export const getDb = async () => {
  console.log('GET from the database');

//Creation of a connection to the database and the version
const db = await openDB ('jate', 1);

//Creation of a new transaction and we're specifying the databse and data privileges
const tx = db.transation('jate', 'readonly');

//The object store open
const store = tx.objectStore('jate');

//Using .getAll() to get all the needed information
// const request = store.getAll();
const request = store.get(1);

//Confirmation
const result = await request;
console.log('result.value', result);
return result?.value;
};


initdb();
