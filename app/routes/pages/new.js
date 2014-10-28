import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.createRecord('page');
	},

	actions: {
		save: function(record) {
			var self = this;
			record.save().then(function() {
				self.transitionTo('pages');
			}).catch(function(reason) {
				console.log(reason);
			});
		}
	}
});