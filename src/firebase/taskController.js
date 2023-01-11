import { addDoc, collection, getDocs, setDoc, doc, deleteDoc } from "firebase/firestore"
import { render } from "react-dom"
import { db } from "./index"

export const addTask = task => {
  return addDoc(collection(db, "task"), JSON.parse(JSON.stringify(task)))
}

export const getTask = async () => {
  const querySnapshot = await getDocs(collection(db, "task"));
  const tasks = querySnapshot.docs.map(doc => {
    return { ...doc.data(), id: doc.id }
  })
  
  return tasks
}

export const toggleComplete = async (task) => {
  setDoc(doc(db, "task",task.id), {
    ...task,
    completed: !task.completed,
    id: task.id
  })
}

export const deleteTask = async (task) => {
  await deleteDoc(doc(db, "task",task.id));
}