import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ContactCenterENV.locationType
});

Router.map(function() {
	this.resource('contacts', { path: '/'}, function () {
		this.resource('contact', { path: '/contacts/:id'}, function () {
			this.route('edit');
		});
		
		this.route('new');
	});
});

export default Router;
