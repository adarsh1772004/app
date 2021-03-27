import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyB1kxOOG8gYJviylwKbPyFoXYKNtNzXcg8',
  authDomain: 'plane-your-party.firebaseapp.com',
  databaseURL: "https://plane-your-party.firebaseio.com",
  projectId: 'plane-your-party',
  storageBucket: 'plane-your-party.appspot.com',
  messagingSenderId: '621868183344',
  appId: '1:621868183344:web:ec8ee8b019323932b062f5',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
export default firebase.database();
