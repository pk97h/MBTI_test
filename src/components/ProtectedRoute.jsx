import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../context/UserContext"

const ProtectedRoute = () => {
    const { user } = useContext(UserContext);
    // 로그인 했는지 체크
    if (!user) {
        // 로그인 페이지로 강제 이동
        return <Navigate to ="/login" />
    }
  return (
    <Outlet />
  )
}

export default ProtectedRoute