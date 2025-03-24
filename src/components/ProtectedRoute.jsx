import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../api/supabaseClient";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        setUser(data.session.user);
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  if (loading) return <div>Loading...</div>;

  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;

