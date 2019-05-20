import * as firebase from 'firebase';

import { firebaseKey } from '../config/keys'

const firebaseConfig = {
  apiKey: firebaseKey,
  authDomain: "foodrater-61fa5.firebaseapp.com",
  databaseURL: "https://foodrater-61fa5.firebaseio.com",
  projectId: "foodrater-61fa5",
  storageBucket: "foodrater-61fa5.appspot.com",
  messagingSenderId: "310146301775",
  appId: "1:310146301775:web:18740395d20fe461"
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
