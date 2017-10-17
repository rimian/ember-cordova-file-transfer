import Ember from 'ember';

export default Ember.Route.extend({
  deviceReady: Ember.inject.service(),

  beforeModel() {

    const promises = [
      this.get('deviceReady').setup(),
    ];

    // Do these things before the application loads
    return Ember.RSVP.all(promises);
  }
});
