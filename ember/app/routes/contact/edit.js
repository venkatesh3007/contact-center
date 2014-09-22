import Ember from 'ember';

export default Ember.Route.extend({
	activate: function () {
		this.controllerFor('contact').set('isEditing', true);
	},

	deactivate: function () {
		this.controllerFor('contact').set('isEditing', false);
	}
});