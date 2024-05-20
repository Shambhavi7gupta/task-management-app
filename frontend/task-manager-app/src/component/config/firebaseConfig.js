import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

//import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC5EByaiFBmTl92XaYoBGOfctfDQyrYTx4",
  authDomain: "fir-frontend-11737.firebaseapp.com",
  projectId: "fir-frontend-11737",
  storageBucket: "fir-frontend-11737.appspot.com",
  messagingSenderId: "480048431474",
  appId: "1:480048431474:web:49e2253015e19db6f01deb",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
