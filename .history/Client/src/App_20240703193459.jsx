import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import { TasksPage } from './pages/TasksPage'
import { TasksFormPage } from './pages/TaskFormPage'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Navigate to="/tasks"} />
   <Route path='/tasks' element={<TasksPage />} />
   <Route path='/tasks-create' element={<TasksFormPage />} />

   </Routes>

   </BrowserRouter>
  )
}

export default App