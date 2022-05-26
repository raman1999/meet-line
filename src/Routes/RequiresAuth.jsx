import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export function RequiresAuth({ children }) {
  const location = useLocation();
  const { token } = useSelector((store) => store.auth);
  return token ? (
    children
  ) : (
    <Navigate to="/" state={{ path: location.pathname }} replace />
  );
}
