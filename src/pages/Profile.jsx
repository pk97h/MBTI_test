import { useContext, useEffect, useState } from "react";
import { updateProfile } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  const [nickname, setNickname] = useState(user?.nickname || "");

  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !user.accessToken) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  }, [user, navigate]);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("user => ", user);
      if (!user || !user.accessToken) {
        throw new Error('No access token available');
      }
      const data = await updateProfile({ nickname }, user.accessToken);
      if (data.success) {
        alert("프로필 수정에 성공했습니다.");
        setUser({ ...user, nickname, avatar: data.avatar });
        navigate("/");
      }
    } catch (error) {
      console.error("Error during profile update:", error);
      if (error.message === 'No access token available' || (error.response && error.response.status === 401)) {
        alert("인증이 만료되었습니다. 다시 로그인해주세요.");
        setUser(null);
        navigate("/login");
      } else {
        alert("프로필 수정에 실패했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <div>
      <div>
        <h1>프로필 수정</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>닉네임</label>
            <input value={nickname} onChange={handleNicknameChange} />
          </div>
          <button type="submit">프로필 업데이트</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
