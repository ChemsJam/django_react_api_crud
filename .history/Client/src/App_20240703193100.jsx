import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { TasksPage } from './pages/TasksPage'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/tasks' element={<TasksPage />}>
    </Route>
   </Routes>

   </BrowserRouter>
  )
}

export default App