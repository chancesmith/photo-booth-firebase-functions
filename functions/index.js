const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.countUsers = functions.database.ref('/users').onWrite(event => {
  return event.data.ref.parent.child('dashboard').child('usersCount').set(event.data.numChildren());
});

// exports.countCounties = functions.database.ref('/users').onWrite(event => {
//   return event.data.ref.parent.child('dashboard').child('countiesReachedCount').set(
//     event.data
//       .filter(function(user){
//         return user. > 6;
//       }).numChildren()
//   );
// });

// exports.getCountiesReached = functions.database.ref('/users').onWrite(event => {
//   arr = [];
//   return event.data.ref.parent.child('dashboard').child('countiesReached').set(
//     event.data.forEach(function(child) {
//       console.log(arr, child);
//       arr.push(child.zipcode);
//     });
//   );
// });