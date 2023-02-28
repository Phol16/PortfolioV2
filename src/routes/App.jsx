import { Route, Routes } from "react-router-dom"
import Intro from "../layout/Intro"
import MainPage from "../pages/MainPage"

function App() {
return(
<Routes>
  <Route path='/' element={<Intro/>}>
    <Route path='/' element={<MainPage/>}/>
  </Route>
</Routes>
)
}

export default App
