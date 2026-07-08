import { Navigate, useNavigate } from "react-router-dom";

function ProtectedRoute({ isAuthenticated, children }) {
const navigate=useNavigate();
  if (!isAuthenticated) {
    <Navigate to="/" />
  }

  return children;
}

export default ProtectedRoute;