import DS from 'ember-data';

DS.RESTAdapter.reopen({
	namespace: 'api/v1'
});

export default DS.ActiveModelAdapter.extend({
});