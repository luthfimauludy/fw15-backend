var admin = require("firebase-admin");

var serviceAccount = require("../../eventix-app-firebase-adminsdk-9yvz3-32bc025d7f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
