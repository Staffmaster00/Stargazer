'use strict';
// TODO: config and ask questions to viability of using app.constant with Josh's example.
//example to pull in elsewhere.
var config = {
  apiKey: FBCreds.key,
  authDomain: FBCreds.authDomain,
  databaseURL: FBCreds.databaseURL,
  projectId: FBCreds.projectId,
  storageBucket: FBCreds.storageBucket,
  messagingSenderId: FBCreds.messagingSenderId
};
firebase.initializeApp(config);

