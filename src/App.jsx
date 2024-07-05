import { Routes, Route } from "react-router-dom"
import Navbar from "./components/common/Navbar"
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"
import AboutPage from "./pages/AboutPage"
import CourseDetails from "./pages/CourseDetails"
import OpenRoute from "./components/core/Auth/OpenRoute"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import VerifyEmail from "./pages/VerifyEmail"
import MyProfile from "./components/core/Dashboard/MyProfile"

function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="courses/:courseId" element={<CourseDetails />} />

          <Route path="signup" element={
            <OpenRoute>
              <SignUp />
            </OpenRoute>
          }/>

          <Route path="login" element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }/>


          <Route path="verify-email" element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }/>









          <Route path="dashboard/my-profile" element={<MyProfile />}/>
        </Routes>
    </div>
  )
}

export default App