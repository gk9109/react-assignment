import React, { useEffect, useState } from 'react';

import { app, db } from '../firebaseConfig/firebaseConfig'
import { collection, getDocs, addDoc, getDoc, doc } from "firebase/firestore";

import '../style/Tasks.css'
import { Timestamp } from 'firebase/firestore/lite';

function TaskForm(){

    const [name, setName] = useState("");
    const [topic, setTopic] = useState("");
    const [description, setDscription] = useState("");
    const [isDone, setDone] = useState("undone")
   
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(db, "tasks"), {task: name, topic, description, Timestamp: new Date()});
            console.log("task added");
            alert("Task added succsessfuly");
            setName("");
            setTopic("");
            setDscription("");
        } catch (error) {
            console.error("error adding task", error);
        }
    };

    return(
        <>
            <div className="taskAddingCard">
                <form onSubmit={handleSubmit}>
                    <h1>your task manager</h1>
                    <label>Your name:</label>
                    <input type="text" value={name} placeholder=" Name" onChange={e => setName(e.target.value)}></input>

                    <label>Task topic:</label>
                    <input type="text" value={topic} placeholder=" Topic" onChange={e => setTopic(e.target.value)}></input>

                    <label>Task description:</label>
                    <input type="text" value={description} placeholder=" Description" onChange={e => setDscription(e.target.value)}></input>

                    {/* <label>Done</label>
                    <input type='checkbox' value={isDone} onChange={e => setDone(e.target.value = "done")}></input> */}
                    <label> date </label>
                    <input type='datetime-local' value={isDone} onChange={e => setDone(e.target.value = "done")}></input>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
                
                
            </div>
        </>
    )
}

function TaskDisplay({taskID}){

    const [taskData, setTaskData] = useState(null); //state to store room data
    const [loading, setLoading] = useState(true); //state tracking loading

    useEffect(() => {
        const fetchTaskData = async () => {
            try {
                const docRef = doc(db, "tasks", taskID); //ref specific task
                const docSnap = await getDoc(docRef); //fetch task data

                if(docSnap.exists()){
                    setTaskData(docSnap.data());
                } else {
                    console.log("no such doc");
                }
            } catch (error) {
                console.log("error fetching data", error);
            } finally {
                setLoading(true);
            }
        };

        fetchTaskData();
    [taskID]}); //rerun the effect when taskid changes

    if(loading) {
        return <p>loading task...</p>
    }

    if(!taskData) {
        return <p>task not found</p>
    }

    return(
        <>
           <div className='taskDisplay'>
                <p>name: {taskData.task}</p>
                <p>description: {taskData.description}</p>
                <p>topic: {taskData.topic}</p>
            </div> 
        </>
    )
}

TaskDisplay

export  {TaskForm, TaskDisplay};



