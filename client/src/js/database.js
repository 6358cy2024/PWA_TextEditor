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
//update/overwrite the object with an id of 1 in your jate store

export const putDb = async (content) => {
  try {
    const db = await openDB('jate', 1);
    const text = db.transaction('jate', 'readWrite');
    const store = text.objectStore('jate');

    const req = store.put({ id: 1, value: content });
    const res = await req;
    console.log('Saved!', res);
  } catch (error) {
    console.error('putDb not implemented', error);
  }
} 



// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  try {
    const db = await openDB('jate', 1);
    const text = db.transaction('jate', 'readOnly');
    
    const store = text.objectStore('jate');
    const request = store.getAll();
    const res = await request;
    console.log('res.value', res);
    return ress?.value;

  } catch (error) {
    console.error('getDb not implemented', error);
    return null; // Return null or handle the error as needed
  }
};



initdb();
