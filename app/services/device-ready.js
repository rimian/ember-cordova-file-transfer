import Ember from 'ember';

/*
  This serive adds the `deviceready` event listener to Ember
  that happens in cordova and delays boot up until that event happens.
*/

export default Ember.Service.extend({
  setup: () => {
    return new Ember.RSVP.Promise((resolve /* , reject */) => {
      if(window.sqlitePlugin !== undefined) {
        document.addEventListener('deviceready', function() {
          resolve();
        });
      }
      else {
        resolve();
      }
    });
  }
});
