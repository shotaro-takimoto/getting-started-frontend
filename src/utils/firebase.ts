// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbIvSmqtVzRZ1WILrzH3LBvK6XzC3Vioo",
  authDomain: "getting-started-43e4f.firebaseapp.com",
  projectId: "getting-started-43e4f",
  // storageBucket: "getting-started-43e4f.appspot.com",
  messagingSenderId: "578404551911",
  appId: "1:578404551911:web:a3ce44a11a4b5365b66642",
  measurementId: "G-31GC6G3RLE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);


// Get a list of cities from your database
export async function getCities() {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  console.log("cityList: ", cityList);
  return cityList;
}