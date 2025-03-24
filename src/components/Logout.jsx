import { useNavigate } from "react-router-dom";
import { supabase } from "../api/supabaseClient";
import { FaPowerOff } from "react-icons/fa";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      navigate("/");
    } else {
      alert("Error logging out. Please try again.");
    }
  };

  return (
    <button
      className="text-red-500 flex flex-row bg-black rounded-xl py-2 px-3 hover:bg-slate-300 border font-bold"
      onClick={handleLogout}
    >
      Logout
      <FaPowerOff className="mx-2 mt-1" />
    </button>
  );
};

export default LogoutButton;