
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Api from './Context/Api'

createRoot(document.getElementById('root')).render(
<Api>
  <App/>
</Api>
)
