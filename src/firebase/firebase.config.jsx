import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDCYl_R5HnYxUB00bk723IYDP3jzyqf800",
    authDomain: "knowledgedot-17342.firebaseapp.com",
    projectId: "knowledgedot-17342",
    storageBucket: "knowledgedot-17342.appspot.com",
    messagingSenderId: "1017652140898",
    appId: "1:1017652140898:web:d5753dcbcc1745b26aea3b"
};
/* const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
}; */

const app = initializeApp(firebaseConfig);
export default app;