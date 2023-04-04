import {Route, Routes} from 'react-router-dom'
import HomePage from '../page/HomePage'
import Skills from '../components/Skills'
import Journey from '../components/Journey'
import Information from '../components/Information'
function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}>
        <Route path='/' element={<Skills/>}/>
        <Route path='/Journey' element={<Journey/>}/>
        <Route path='/Information' element={<Information/>}/>
      </Route>
    </Routes>
  )
}

export default App
