import { useContext, useEffect } from "react";
import AuthForm from "../components/AuthForm";
import { login, getUserProfile } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const { id, password } = formData;
      const data = await login({ id, password });
      if (data.success) {
        setUser(data);
        navigate("/");
      }
    } catch (error) {
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div>
      <div>
        <h1>로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} setUser={setUser} />
        <div>
          <p>
            계정이 없으신가요? <Link to="/signup">회원가입</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
