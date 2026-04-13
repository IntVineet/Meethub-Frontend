import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");

    if (token) {
      localStorage.setItem("token", token);
      navigate("/dashboard"); // redirect after login
    } else {
      navigate("/login");
    }
  }, []);

  return <h2>Logging you in...</h2>;
};

export default AuthSuccess;
