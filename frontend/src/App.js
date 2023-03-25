import './App.css';
import Login from './components/login/login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './components/signup/signup';
// import Table from './components/tableui/table';
import Notes  from './components/NotesUi/notesUi';
import PrivateRoute from './components/auth/PrivateRoute';
import Navbar from './components/Navbar/Navbar';
import Addnotes from './components/AddNote/Addnotes';
function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<SignUp/>}/>
          <Route path="/notes" element={<PrivateRoute Child={Notes} />}/>
          <Route path="/addnote" element={<Addnotes/>}/>
          {/* <Route path="/contacts" element={<Table />} /> */}

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

