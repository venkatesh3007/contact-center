import Ember from 'ember';

export default Ember.ArrayController.extend({
	sortProperties: ['firstName', 'lastName'],

	actions: {
		redirectToNew: function (message) {
			Ember.Logger.log('clicked: ', message);
			this.transitionToRoute('contacts.new');
		}
	},

	contacts: function () {
		return this.get('search') ? this.get('searchedContacts') : this;
	}.property('search', 'searchedContacts'),

	searchedContacts: function () {
		var search = this.get('search').toLowerCase();
		return this.filter(function (contact) {
			return contact.get('fullName').toLowerCase().indexOf(search) !== -1;
		});
	}.property('search', 'this.@each.fullName')
});
