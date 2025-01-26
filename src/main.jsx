import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TaskForm, TaskDisplay} from './componenets/Tasks.jsx'
import '../src/style/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskForm />
    <TaskDisplay />
  </StrictMode>,
)

const rootDiv = document.getElementById('root');
rootDiv.style.backgroundColor = "grey";

