"use strict";
const request = require ('request')

module.exports = {
	name: "weather",

	/**
	 * Service settings
	 */
	settings: {

	},

	/**
	 * Service dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {

		/**
		 * Say a 'Hello'
		 *
		 * @returns
		 */
		hello() {			
			// add promise - reslove or reject 

			return new Promise(function(resolve, reject) {
				
				// implement 3rd party api
				request('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22', function (error, response, body) {

				if(error){
					// send meaningful msg
					console.error('error:', error); // Print the error if one occurred
					reject(JSON.parse(error));
				}

				// data
				resolve (JSON.parse(body));
				});
			});			
		},



		/**
		 * Welcome a username
		 *
		 * @param {String} name - User name
		 */
		validation: {
			params: {
				name: "string",
				password: "string",
			},
			handler(ctx) {
				let valid = this.login(ctx.params.name, ctx.params.password);
				if (valid == true) {
					return `Welcome, ${ctx.params.name}`;
				}
				else {
					return 'Failed';
				}

			}
		}
	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {
		login(name, password) {
			if (name == 'abc' && password == 'abc') {
				return true;
			}
			else {
				return false;
			}
		}
	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	stopped() {

	}
};