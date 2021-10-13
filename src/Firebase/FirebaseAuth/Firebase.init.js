import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseAuth.Config";

const initiaization = () => {
    initializeApp(firebaseConfig);
}

export default initiaization;

/*
 step for authentitaction
 1. create firebase app;
 2. create web app
 3. get firebase config in config js file
 4. get initialization file

 */