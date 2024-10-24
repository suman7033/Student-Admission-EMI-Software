import AdminPanel from "./component/AdminPanel/adminPanel";
import {createBrowserRouter, Route, Routes, RouterProvider} from 'react-router-dom';
import Dashboard from "./component/Dashboard/dashboard";
import Login from "./component/LoginForm/login-form";
import AdmissionForm from "./component/AdmissionProcess/AdmissionForm";
import Sidebar from "./component/AdminPanel/sidebar";
import LoginForm from "./component/LoginForm/login-form";
import Topbar from "./component/AdminPanel/topbar";
import StudentIdCard from "./component/StudentIdCard/StudentIdCard";
import AdmissionList from "./component/AdmissionProcess/AdmissionList";
import PersonalDetails from "./component/AdmissionProcess/PersonalDetails";
import StudentIdCardList from "./component/StudentIdCard/StudentIdCardList";
import IdCard from "./component/StudentIdCard/IdCard";
import TeamList from "./component/TeamList/TeamList";
import AddNewUser from "./component/TeamList/AddNewUser";
import EditTeamList from "./component/TeamList/EditTeamList";
import EditStudentIdCard from "./component/StudentIdCard/EditStudentIdCard";
import EditAdmissionForm from "./component/AdmissionProcess/EditAdmissionForm";
import CourseList from "./component/CourseList/CourseList";
import Edit_CourseList from "./component/CourseList/Edit_CourseList";
import AddCourseForm from "./component/CourseList/AddCourseForm";
import SourceList from "./component/SourceList/SourceList";
import EditSourceList from "./component/SourceList/EditSourceList";
import AddSourceForm from "./component/SourceList/AddSourceForm";
import BranchList from "./component/BranchList/BranchList";
import EditBranchList from "./component/BranchList/EditBranchList";
import BranchListForm from "./component/BranchList/BranchListForm";
import CityList from "./component/CityList/CityList";
import EditCityList from "./component/CityList/EditCityList";
import AddCityList from "./component/CityList/AddCityList";
import WhatsappRule from "./component/Whatsapp/WhatsappRule";
import WhatsappForm from "./component/Whatsapp/WhatsappForm";
import WhatsappList from "./component/Whatsapp/WhatsappList";

function App() {
   
  return (
  <div className="h-screen w-full">
       <AdminPanel/>
       <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/admission_list" element={<AdmissionList/>}/>
        <Route path="/admission_form" element={<AdmissionForm/>}/>
        <Route path="/edit_admission_form" element={<EditAdmissionForm/>}/>
        <Route path="/student_id_card_list" element={<StudentIdCardList/>}/>
        <Route path="/personal_details" element={<PersonalDetails/>}/>
        <Route path="/student_id_form" element={<StudentIdCard/>}/>
        <Route path="/id_card" element={<IdCard/>}/>
        <Route path="/team_list" element={<TeamList/>}/>
        <Route path='/add_user' element={<AddNewUser/>}/>
        <Route path='/edit_team_list' element={<EditTeamList/>}/>
        <Route path='/edit_student_id_card' element={<EditStudentIdCard/>}/>
        <Route path='/course_list' element={<CourseList/>}/>
        <Route path='/edit_course_list' element={<Edit_CourseList/>}/>
        <Route path='/add_course_list' element={<AddCourseForm/>}/>
        <Route path='/source_list' element={<SourceList/>}/>
        <Route path='/edit_source_list' element={<EditSourceList/>}/>
        <Route path='/add_source_list' element={<AddSourceForm/>}/>
        <Route path="/branch_list" element={<BranchList/>}/>
        <Route path="/edit_branch_list" element={<EditBranchList/>}/>
        <Route path="/add_branch_list" element={<BranchListForm/>}/>
        <Route path="/city_list" element={<CityList/>}/>
        <Route path="/edit_city_list" element={<EditCityList/>}/>
        <Route path="/add_city_list" element={<AddCityList/>}/>
        <Route path="/whatsapp_rule" element={<WhatsappRule/>}/>
        <Route path="/whatsapp_form" element={<WhatsappForm/>}/>
        <Route path="/whatsapp_list" element={<WhatsappList/>}/>
        {/* <Route path="/mail_list" element={}/>
        <Route path="/mail_form" element={}/> */}
       </Routes>
  </div>
  );
}

export default App;