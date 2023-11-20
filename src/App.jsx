// import React from 'react'
import Footer from "./components/footer/Footer"
import Form from "./components/form/Form"
import Navbar from "./components/navbar/Navbar"
import Stats from "./components/stats/Stats"
import TaskList from "./components/tasks/TaskList"

import './index.css'



function App() {
  return (
    <div className="app">
    <Navbar/>
    <Stats/>
    <Form/>
    <TaskList/>
    <Footer/>
    </div>
  )
}

export default App