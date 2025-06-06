
import './App.css'
import Login from './components/Login'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import LoginSucess from './components/LoginSucess'
import LoginFail from './components/LoginFail'


function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/login' element={<LoginSucess/>}></Route>
      <Route path='/fail' element={<LoginFail/>}></Route>
    </Routes>

    </BrowserRouter>
  )
}

export default App
