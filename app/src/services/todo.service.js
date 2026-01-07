import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

const todosRef = collection(db, "todos");

export const createTodo = (todo) => addDoc(todosRef, todo);

export const getTodos = async () => {
  const snapshot = await getDocs(todosRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const updateTodo = (id, data) =>
  updateDoc(doc(db, "todos", id), data);

export const deleteTodo = (id) =>
  deleteDoc(doc(db, "todos", id));