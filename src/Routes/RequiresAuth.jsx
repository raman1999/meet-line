import { Navigate, useLocation } from "react-router-dom";

export function RequiresAuth({ children }) {
  const location = useLocation();
  return true ? (
    children
  ) : (
    <Navigate to="/" state={{ path: location.pathname }} replace />
  );
}
