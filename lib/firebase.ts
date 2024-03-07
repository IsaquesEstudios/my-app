import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwLkyke5PngPtDPQcpKmJ6R2KtVnZUAro",
  authDomain: "dashboard-isaques-estudios.firebaseapp.com",
  projectId: "dashboard-isaques-estudios",
  storageBucket: "dashboard-isaques-estudios.appspot.com",
  messagingSenderId: "965160402879",
  appId: "1:965160402879:web:c91f3ba52199c37045eb0a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
