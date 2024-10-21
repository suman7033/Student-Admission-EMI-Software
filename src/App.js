import AdminPanel from "./component/AdminPanel/adminPanel";
import {createBrowserRouter, Route, Routes, RouterProvider} from 'react-router-dom';
import Dashboard from "./component/Dashboard/dashboard";
import Login from "./component/LoginForm/login-form";
import AdmissionForm from "./component/AdmissionProcess/AdmissionForm";
import Sidebar from "./component/AdminPanel/sidebar";
import LoginForm from "./component/LoginForm/login-form";
import Topbar from "./component/AdminPanel/topbar";
import StudentIdCard from "./component/StudentIdCard/StudentIdCard";

function App() {
   
  return (
  <div className="min-h-screen w-full">
       <AdminPanel/>
       <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/admission_form" element={<AdmissionForm/>}/>
        <Route path="/student" element={<StudentIdCard/>}/>
       </Routes>
  </div>
  );
}

export default App;