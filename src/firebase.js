import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"
              
const firebaseConfig = {
  apiKey: "AIzaSyAdYZs9onyGDxEW4JgRS3vE7WkdbM0MFCk",
  authDomain: "shikhahotelmanagement.firebaseapp.com",
  databaseURL: "https://shikhahotelmanagement-default-rtdb.firebaseio.com",
  projectId: "shikhahotelmanagement",
  storageBucket: "shikhahotelmanagement.appspot.com",
  messagingSenderId: "273467604540",
  appId: "1:273467604540:web:f24d0afb28649ecd69cd39"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getDatabase();
export default app;
