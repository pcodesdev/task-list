import  { useCallback, useState } from 'react';
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
  // lifting the state up
  const [tasks, setTasks] = useState([])

  function handleAddTasks(item){
    setTasks(items => [...items, item])
  }
  const particlesInit = useCallback(main => {
      loadFull(main);
  }, [])

  return (
      
    <div className="App">
    <Particles options={particlesOptions} init={particlesInit}/>
    {/* import React from 'react' */}
    <div className="App_header">
    <Navbar/>
    <Stats/>
    <Form onAddTasks={handleAddTasks}/>
    <TaskList tasks={tasks}/>
    <Footer/>
    </div>
    </div>
  )
}

export default App