/* globals Firebase */

export default DS.FirebaseAdapter.extend({
  firebase: new Firebase("https://thea-book.firebaseio.com")
});