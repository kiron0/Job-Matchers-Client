import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import auth from "../Firebase/Firebase.config";
import useAdmin from "../Hooks/useAdmin";

const RequireAdmin = ({ children }) => {
  const [isAdmin, loading] = useAdmin();
  if (loading) return;
  if (!isAdmin) {
    signOut(auth).then(() => {
      toast.success(
        `We forcefully Sign Out You. Because you try to go Restrict Routes`
      );
      localStorage.removeItem("accessToken");
    });
    return <Navigate to="/login" state={{ from: "/dashboard" }} replace />;
  }
  return children;
};

export default RequireAdmin;
