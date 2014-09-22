import Ember from 'ember';

export default Ember.Controller.extend({
	showError: false,

	panel: "panel panel-default",

	actions: {

		createContact: function () {
			var self = this;
			var fields = this.get('fields');
			if (this.valid(fields)) {
				var contact = this.store.createRecord('contact', fields);

				contact.save().then(function () {
					self.transitionToRoute('contact', contact);
				}); 
			} else {
				this.set('showError', true);
				this.set('panel', "panel panel-danger");
			}
		}
	},

	valid: function (fields) {
		return fields.firstName && fields.lastName && fields.email;
	}
});