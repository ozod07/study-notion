import { Routes, Route } from "react-router-dom"
import Navbar from "./components/common/Navbar"
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"
function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </div>
  )
}

export default App