import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource('pages', {path: 'pages'}, function() {

		this.route('new');
		this.route('edit', {path: ':page_id/edit'});

	});
	this.resource('pages.view', {path: 'pages/:book_title/:page_number'});
});

export default Router;
