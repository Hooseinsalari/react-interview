// components
import Movies from "./components/Movies"
import SingleMovie from "./components/SingleMovie"

// react router
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/:id" element={<SingleMovie />} />
    </Routes>
    </>
  )
}

export default App
