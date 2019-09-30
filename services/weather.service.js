"use strict";
const request = require ('request')

module.exports = {
	name: "weather",

	/**
	 * Actions
	 */
	actions: {

		/**
		 * GET now weather from position
		 * 
		 * URL: /api/weather/now?lat=40.730610&lon=-73.935242
		 *
		 * @returns
		 */
		now(req, res) {			
			// add promise - reslove or reject 

			return new Promise(function(resolve, reject) {


				// if lat or lon are missing, send meaningful msg
				if( typeof req.params.lat === "undefined" || typeof req.params.lon === "undefined" ){
					reject("missing lat or lon");
				}

				// https://api.openweathermap.org/data/2.5/weather?APPID=931dd482db9863c889f68196f104be72&lat=XXX&lon=YYY

				// build string with the url of openweathermap
				var openweathermapApiKey = '931dd482db9863c889f68196f104be72';
				var url = `https://api.openweathermap.org/data/2.5/weather?APPID=${openweathermapApiKey}&lat=${req.params.lat}&lon=${req.params.lat}`;
				
				// call the openweathermap api
				request(url, function (error, response, body) {

					// if error occours, send it back
					if(error){
						reject(JSON.parse(error));
					}

					// if success, return the same json of the weather api
					resolve(JSON.parse(body));

				});
			});			
		},

		/**
		 * GET tomorrow weather from position
		 * 
		 * URL: /api/weather/tomorrow?lat=40.730610&lon=-73.935242
		 *
		 * @returns
		 */
		tomorrow(req, res) {			
			// add promise - reslove or reject 

			return new Promise(function(resolve, reject) {


				// if lat or lon are missing, send meaningful msg
				if( typeof req.params.lat === "undefined" || typeof req.params.lon === "undefined" ){
					reject("missing lat or lon");
				}

				// https://api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=3

				// build string with the url of openweathermap
				var openweathermapApiKey = '931dd482db9863c889f68196f104be72';
				var url = `https://api.openweathermap.org/data/2.5/forecast?APPID=${openweathermapApiKey}&lat=${req.params.lat}&lon=${req.params.lat}`;
				
				// call the openweathermap api
				request(url, function (error, response, body) {

					// if error occours, send it back
					if(error){
						reject(JSON.parse(error));
					}

					// the api contains the next 5 days, with array every three hours
					var fiveDays = JSON.parse(body);

					// for tomorrow, I'll return the segment of now + 24 hours ( 24 / 3 = 8, array start from 0, so the object number 7 is the one to return )
					resolve(fiveDays.list[7]);

				});
			});			
		},

		/**
		 * GET now weather for city
		 * 
		 * URL: /api/weather/citynow?city=Sydney&country=au
		 *
		 * @returns
		 */
		citynow(req, res) {			
			// add promise - reslove or reject 

			return new Promise(function(resolve, reject) {


				// if city or country are missing, send meaningful msg
				if( typeof req.params.city === "undefined" || typeof req.params.country === "undefined" ){
					reject("missing city or country");
				}

				// build string with the url of openweathermap
				var openweathermapApiKey = '931dd482db9863c889f68196f104be72';
				var url = `https://api.openweathermap.org/data/2.5/weather?APPID=${openweathermapApiKey}&q=${req.params.city},${req.params.country}`;
				
				// call the openweathermap api
				request(url, function (error, response, body) {

					// if error occours, send it back
					if(error){
						reject(JSON.parse(error));
					}

					// if success, return the same json of the weather api
					resolve(JSON.parse(body));

				});
			});			
		},

		/**
		 * GET tomorrow weather from position
		 * 
		 * URL: /api/weather/citytomorrow?city=Sydney&country=au
		 *
		 * @returns
		 */
		citytomorrow(req, res) {			
			// add promise - reslove or reject 

			return new Promise(function(resolve, reject) {


				// if city or country are missing, send meaningful msg
				if( typeof req.params.city === "undefined" || typeof req.params.country === "undefined" ){
					reject("missing city or country");
				}

				// build string with the url of openweathermap
				var openweathermapApiKey = '931dd482db9863c889f68196f104be72';
				var url = `https://api.openweathermap.org/data/2.5/forecast?APPID=${openweathermapApiKey}&q=${req.params.city},${req.params.country}`;
				
				// call the openweathermap api
				request(url, function (error, response, body) {

					// if error occours, send it back
					if(error){
						reject(JSON.parse(error));
					}

					// the api contains the next 5 days, with array every three hours
					var fiveDays = JSON.parse(body);

					// for tomorrow, I'll return the segment of now + 24 hours ( 24 / 3 = 8, array start from 0, so the object number 7 is the one to return )
					resolve(fiveDays.list[7]);

				});
			});			
		},

	},

};