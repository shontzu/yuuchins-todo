import firebase from 'firebase'
import {ref, onUnmounted } from 'vue' 

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCOxT4f2EB14-b7Cm4BJVu6AKn1qDL5GGQ",
  authDomain: "yuuchin-firebase-vue.firebaseapp.com",
  projectId: "yuuchin-firebase-vue",
  storageBucket: "yuuchin-firebase-vue.appspot.com",
  messagingSenderId: "1068773353743",
  appId: "1:1068773353743:web:c489104afab006ed6d767a"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);

// Connect to DB
const db = firebaseApp.firestore()
const usersCollection = db.collection('users')

export const createUser = user => {
    return usersCollection.add(user)
}

export const getUser = async id => {
    const user = await usersCollection.doc(id).get()
    return user.exist ? user.data() : null
}

export const updateUser = (id, user) => {
    return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
    return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
    const users = ref([])
        const close = usersCollection.onSnapshot(snapshot=> {
            users.value=snapshot.docs.map(doc=>({id:doc.id, ...doc.data()}))
        })
     onUnmounted(close)
     return users   
}