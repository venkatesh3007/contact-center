import Ember from 'ember';

export default Ember.ObjectController.extend({
	isEditing: false,

	delete: function () {
		var self = this;
		this.get('model').destroyRecord().then(function () {
			self.transitionToRoute('contacts');	
		});
	},

	actions: {
		redirectToEdit: function () {
			this.transitionToRoute('contact.edit');
		}
	}
});
