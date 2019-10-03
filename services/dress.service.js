"use strict";

module.exports = {
	name: "dress",

	/**
	 * Actions
	 */
	actions: {

		/**
		 * GET dress code from temperature and description
		 * 
		 * URL: /api/dress/code?temp=123.23&description=blablabla
		 *
		 * @returns
		 */
		code(req, res) {			
			// add promise - reslove or reject 

			return new Promise(function(resolve, reject) {

				// if temp or description are missing, send meaningful msg
				if( typeof req.params.temp === "undefined" || typeof req.params.description === "undefined" ){
					reject("missing temp or description");
                }
                
                var answerString = '';

                // convert temperature to float
                var floatTemp = parseFloat(req.params.temp);

                // set the first part of the answer based on temperature
                if( floatTemp < 10 ){
                    answerString = 'cold-';
                } else if ( floatTemp >= 10 && floatTemp < 18 ){
                    answerString = 'fresh-';
                } else if ( floatTemp >= 18 && floatTemp <= 25 ){
                    answerString = 'warm-';
                } else {
                    // over 25 degrees
                    answerString = 'hot-';
                }

                // set the second part of the answer based on description

                if ( 
                    // if description contains light rain or clouds, weather is variable
                    req.params.description.indexOf('light rain') > -1 ||
                    req.params.description.indexOf('clouds') > -1 || 
                    req.params.description.indexOf('mist') > -1
                ) {
                    answerString += 'variable';

                } else if ( 
                    // else if description contains only rain, the weather is rain
                    req.params.description.indexOf('rain') > -1 || 
                    req.params.description.indexOf('storm') > -1 
                ) {
                    answerString += 'rain';
                } else {
                    // all other cases, is clear
                    answerString += 'clear';
                }

                // if there is a parameter category, add it to the request
				if( typeof req.params.category !== "undefined" ){
                    answerString += '-';
                    answerString += req.params.category;
                }

                // to get a random number for the folder from different sets of dresses
                var randomDress = Math.floor(Math.random() * (4 - 1) + 1);
                answerString += '/'+randomDress+'/';

                // if success, return the answer string
				resolve(answerString);
                
			});			
		},

	},

};