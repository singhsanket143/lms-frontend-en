import './App.css'

import { Route, Routes } from 'react-router-dom'

import RequireAuth from './components/Auth/RequireAuth'
import Aboutus from './pages/Aboutus'
import Contact from './pages/Contact'
import CourseDescription from './pages/Course/CourseDescription'
import CourseList from './pages/Course/CourseList'
import CreateCourse from './pages/Course/CreateCourse'
import AddLecture from './pages/Dashboard/AddLecture'
import DisplayLectures from './pages/Dashboard/DisplayLectures'
import Denied from './pages/Denied'
import Home from './pages/Home'
import Notfound from './pages/Notfound'
import Checkout from './pages/Payment/Checkout'
import CheckoutFailure from './pages/Payment/CheckoutFailure'
import CheckoutSuccess from './pages/Payment/CheckoutSuccess'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import EditProfile from './pages/User/EditProfile'
import Profile from './pages/User/Profile'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<Aboutus />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/courses' element={<CourseList />} />
      <Route path='/course/description' element={<CourseDescription />} />

      <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/editprofile" element={<EditProfile />} />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/success" element={<CheckoutSuccess />} />
        <Route path="/checkout/fail" element={<CheckoutFailure />} />

        <Route path="/course/displaylectures" element={<DisplayLectures />} />
      </Route>

      <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
        <Route path="/course/create" element={<CreateCourse />} />
        <Route path="/course/addlecture" element={<AddLecture />} />
      </Route>

      <Route path='/contacts' element={<Contact />} />
      <Route path='/denied' element={<Denied />} />
      <Route path='*' element={<Notfound />} />
    </Routes>
  )
}

export default App
