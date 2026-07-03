import {initializeApp} from 'firebase/app'
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut,updateProfile} from 'firebase/auth'
import {getFireStore,collection,addDoc,getDocs,updateDoc,deleteDoc,doc,onSnapShot,query,orderBy} from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyDsetUCeMH_HVV-oKJ1ulMSKhmb3Q24YBg",
    authDomain: "group2-da93d.firebaseapp.com",
    projectId: "group2-da93d",
    storageBucket: "group2-da93d.firebasestorage.app",
    messagingSenderId: "974956319159",
    appId: "1:974956319159:web:8f34f28a0719b946afd832",
    measurementId: "G-WYWTBXYZR9"
  };

  //initialzing firebase app here

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const db = getFireStore(app)


export{auth,db,signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile,updateDoc,collection,deleteDoc,doc,onSnapShot,query,orderBy,doc,getDocs};