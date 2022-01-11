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
const TodosCollection = db.collection('todos')

export const createTodo = todo => {
    return TodosCollection.add(todo)
}

export const getTodo = async id => {
    const todo = await TodosCollection.doc(id).get()
    return todo.exist ? todo.data() : null
}

export const updateTodo = (id, todo) => {
    return TodosCollection.doc(id).update(todo)
}

export const deleteTodo = id => {
    return TodosCollection.doc(id).delete()
}

export const useLoadTodos = () => {
    const Todos = ref([])
        const close = TodosCollection.onSnapshot(snapshot=> {
            Todos.value=snapshot.docs.map(doc=>({id:doc.id, ...doc.data()}))
        })
     onUnmounted(close)
     return Todos   
}