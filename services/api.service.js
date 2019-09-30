"use strict";

const ApiGateway = require("moleculer-web");
const fs = require("fs");

module.exports = {
	name: "api",
	mixins: [ApiGateway],

	// More info about settings: https://moleculer.services/docs/0.13/moleculer-web.html
	settings: {
		port: process.env.PORT || 3000,

		routes: [{
			// api name
			path: "/api",
			whitelist: [
				// Access to any actions in all services under "/api" URL
				"**"
			]
		}],

		   // HTTPS server with certificate
		   // https: {
			// key: fs.readFileSync("./config/key.pem"),
			// cert: fs.readFileSync("./config/cert.pem"),
			// passphrase: "0000"
		// },


		// Serve assets from "public" folder
		assets: {
			folder: "public"
		}
	}
};
