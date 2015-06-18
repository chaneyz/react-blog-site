var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $

module.extend = Backbone.Model.extend({
	defaults: {
		username: null,
		password: null
	},

	validate: function (attr) {
		if(!attr.username) {
			return ('Please, enter username')
		}
		else if(!attr.password) {
			return('Please, enter password')
		}
		return false;
	}

})