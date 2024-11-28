import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        헤더
        <Link to="/"> 홈 </Link>
        <Link to="/profile"> 프로필 </Link>
        <Link to="/test"> 테스트 </Link>
        <Link to="/results"> 결과 </Link>
      </header>
      <Outlet />
      <footer>푸터</footer>
    </>
  );
};

export default Layout;
