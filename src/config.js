import firebase from 'firebase/app';
import 'firebase/storage';
var firebaseConfig = {
    apiKey: "AIzaSyDPksJqB1cRu0aaOp4kVAby-zQVrQBvfSc",
    authDomain: "fir-vue-ac3e9.firebaseapp.com",
    databaseURL: "https://fir-vue-ac3e9.firebaseio.com",
    projectId: "fir-vue-ac3e9",
    storageBucket: "fir-vue-ac3e9.appspot.com",
    messagingSenderId: "86974115826",
    appId: "1:86974115826:web:998f7364fbd02ac8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage=firebase.storage();
export{
  firebase,storage as default
}
