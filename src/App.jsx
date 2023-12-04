import  { useCallback, useState, useEffect } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";


import Footer from "./components/footer/Footer"
import Form from "./components/form/Form"
import Navbar from "./components/navbar/Navbar"
import Stats from "./components/stats/Stats"
import TaskList from "./components/tasks/TaskList"

import './index.css'



function App() {
  // lifting the state up to the first common parent component to both the Form and TaskList Components
  // In react we have only one way dataflow. Data can only flow from the parent component to the child components
  const [tasks, setTasks] = useState([])
  // persisting user input data using localStorage
  const [persistedTasks, setPersistedTasks] = useState([]);

useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('myTasks')) || [];
    setPersistedTasks(storedTasks);
    // Update the actual tasks state with the retrieved tasks
    setTasks(storedTasks);
  }, []);
  

  const handleAddTasks = (item) => {
    // Update tasks state
    setTasks(items => [...items, item]);
  
    // Update persisted tasks and local storage
    setPersistedTasks(persistedTasks => [...persistedTasks, item]);
    localStorage.setItem('myTasks', JSON.stringify([...persistedTasks, item]));
  };
  
  const handleDeleteTask = (id) => {
    // Update tasks state
    setTasks(tasks => tasks.filter(task => task.id !== id));
  
    // Update persisted tasks and local storage
    setPersistedTasks(persistedTasks => persistedTasks.filter(task => task.id !== id));
    localStorage.setItem('myTasks', JSON.stringify(persistedTasks.filter(task => task.id !== id)));
  };

  // Clear Local Storage
  const handleClearTasks = () => {
    setTasks([]);
    setPersistedTasks([]);
    localStorage.removeItem('myTasks');
  };
  
  

  const particlesInit = useCallback(main => {
      loadFull(main);
  }, [])

  return (
      
    <div className="App">
    <Particles options={particlesOptions} init={particlesInit}/>
    {/* import React from 'react' */}
    <div className="App_header">
    <Navbar />
    <Stats/>
    {/* passing function as a prop */}
    <Form onAddTasks={handleAddTasks} onClearTasks={handleClearTasks}/>
    <TaskList tasks={tasks} onDeleteTask={handleDeleteTask}/>
    <Footer/>
    </div>
    </div>
  )
}

export default App