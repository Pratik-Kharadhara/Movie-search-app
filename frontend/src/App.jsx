import MovieCard from "./Elements/MovieCard"
import Favourties from "./Pages/Favourites"
import Home from "./Pages/Home"
import { Routes ,Route } from "react-router-dom"
import NavBar from "./Elements/NavBar"
function App() {
  

  return (
    <>
    {/* this is our nav where all the links will be there to go between various pages */}
      <NavBar />
    {/* so this is use for making the route between various routes/pages */}
     <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favourites" element={<Favourties />}/>
     </Routes>
     </>
  )
}

export default App
