var admin = require("firebase-admin");

// var serviceAccount = require("../../eventix-app-firebase-adminsdk-9yvz3-32bc025d7f.json");
var serviceAccount = JSON.parse(process.env.FIREBASE_CREDENTIALS);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
