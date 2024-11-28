import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import TestResult from "./pages/TestResult";
import Test from "./pages/Test";
import Signup from "./pages/Signup";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import UserProvider from "./components/UserProvider";

function App() {
  // 새로고침 시를 대비하기 위해서 현재 로그인한 정보를 가져오자 !

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/test" element={<Test />} />
              <Route path="/results" element={<TestResult />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
