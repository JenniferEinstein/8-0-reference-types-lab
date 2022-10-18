/**
 * Adds a new store to the very end of the list.
 * @param {Object[]]} stores - An array of store objects.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object[]} The same `stores` array that was inputted.
 */


/*
WRONG ANSWER WAS {
  stores.unshift[store]
  return(stores)}
*/

function addNewStore(stores, store) {
  stores.push(store);      //push adds the input in the paranthesis to the end of the stores array
  return stores;
}

/**
 * Removes a store object at the given position.
 * @param {Object[]]} stores - An array of store objects.
 * @param {number} index - A number representing the index of the store to be removed from the array.
 * @returns {Object[]} The same `stores` array that was inputted.

/carina

*/
function removeStoreAtPosition(stores, index) {
  stores.splice(index, 1);
  return stores;
}





/**
 * Creates a duplicate of the `store` object. No references should be shared between the inputted `store` and the result.
 * @param {Object} store - An object representing a single store. See the instructions for details on its shape.
 * @returns {Object} The duplicated store object. This should not be the same as the store that was inputted.
 */
function duplicateStore(store) {
  let objectCopy = {}; //objectCopy will store a copy of the store
  let key;
  for (key in store) {
    objectCopy[key] = store[key]; //copies each property to the objectCopy object
}
  return objectCopy;
} 


/** 
let copyStore = {};
  let keys = Object.keys(store);
  for (let i = 0; len = keys.length; i < len, i++) {
    copyStore[keys] = store[keys];
  }
  return copyStore
  */

// const sheeps = ['🐑', '🐑'];

// const sheeps2 = sheeps;

// sheeps2.push('🐺');

// console.log(sheeps2);
// // [ '🐑', '🐑', '🐺' ]

// // Ahhh 😱 , our original sheeps have changed?!
// console.log(sheeps);
// // [ '🐑', '🐑', '🐺' ]

module.exports = {
  addNewStore,
  removeStoreAtPosition,
  duplicateStore,
};
