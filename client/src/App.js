import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import SignUpForm from "./components/Register";
import LoginForm from "./components/Login";
import Home from "./components/Home";

function App() {


  return (
    <>
    <Routes>
    <Route path="/register" element={<SignUpForm/>}/>
    <Route path="/login" element={<LoginForm/>}/>
    <Route path='/' element={<Home/>}/>
    </Routes>
    <ToastContainer
        position="bottom-center"
        autoClose={7000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </>
    
  );
}

export default App;
