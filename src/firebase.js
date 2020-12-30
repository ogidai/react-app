import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCHLV807zJgI18zDBrywIPm_pJHoqEv7GA",
    authDomain: "chat-with-ogi.firebaseapp.com",
    databaseURL: "https://chat-with-ogi-default-rtdb.firebaseio.com/",
    projectId: "chat-with-ogi",
    storageBucket: "chat-with-ogi.appspot.com",
    messagingSenderId: "492194568180",
    appId: "1:492194568180:web:722dd0dfdef5c88a2d0ba1"
  };

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
    messagesRef.push({ name, text });
};