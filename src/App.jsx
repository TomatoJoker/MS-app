import { Routes, Route } from 'react-router-dom'
import Home from "./pages/HomePage"
import MyProfile from "./pages/MyProfile"

const App = () => {

  return (
    <>
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
    </>
  )
}

export default App
