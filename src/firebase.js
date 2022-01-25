import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

// Your web app's Firebase configuration
const config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: 'yuuchin-firebase-vue',
  storageBucket: 'yuuchin-firebase-vue.appspot.com',
  messagingSenderId: '1068773353743',
  appId: '1:1068773353743:web:c489104afab006ed6d767a',
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(config)
// Initialize Firestore
const db = firebaseApp.firestore()
// Initialize Collection
const TodosCollection = db.collection('todos')

// CREATE
export const createTodo = (todo) => {
  return TodosCollection.add(todo)
}

// READ
export const getTodo = async (id) => {
  const todo = await TodosCollection.doc(id).get()
  return todo.exist ? todo.data() : null
}

// UPDATE
export const updateTodo = (id, todo) => {
  return TodosCollection.doc(id).update(todo)
}

// DELETE
export const deleteTodo = (id) => {
  return TodosCollection.doc(id).delete()
}

// TRACK CHANGES
// onSnapshot is a method that listens to the document to track changes.
// Local writes in your app will invoke snapshot listeners immediately
// When you perform a write, your (onSnapshot) listener will be notified
// with the new data before the data is sent to the backend.
// source: https://firebase.google.com/docs/firestore/query-data/listen
export const useLoadTodos = () => {
  const Todos = ref([])
  const close = TodosCollection.onSnapshot((snapshot) => {
    Todos.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return Todos
}
