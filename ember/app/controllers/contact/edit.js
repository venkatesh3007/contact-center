import Ember from 'ember';

export default Ember.ObjectController.extend({
	actions: {
		saveChanges: function () {
			var self = this;
			this.get('model').save().then(function () {
				self.transitionToRoute('contact');
			});
		},

		cancel: function () {
			this.get('model').rollback();
			this.transitionToRoute('contact');
		}
	}
});
