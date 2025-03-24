import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { supabase } from "../api/supabaseClient";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      toast.error("Registration Failed: " + error.message, { position: "top-right", autoClose: 2000 });
    } 
    else 
    {
      toast.success("Registration successful! Redirecting...", { position: "top-right", autoClose: 2000 });
  
        setTimeout(() => {
          navigate("/tts");
        }, 2000);
    }
  };

  return (
    <div className="flex flex-col w-full items-center bg-login min-h-screen p-3">
      <h2 className="text-3xl font-bold mb-4 text-gray-200 mt-10">Register</h2>

      <form className="flex flex-col w-full max-w-md bg-slate-400 p-8 rounded-lg shadow-md space-y-4 border-2 border-gray-200" onSubmit={handleRegister}>
      
        <input type="email" 
        placeholder="Enter a Email Address" 
        className="rounded-lg p-2"
        value={email} onChange={(e) => setEmail(e.target.value)} required />

        <input type="password" 
        placeholder=" Create a Password" className="rounded-lg p-2"
        value={password} onChange={(e) => setPassword(e.target.value)} required />

        <div className="flex justify-center">
          <button type="submit" className="bg-red-600 text-white font-bold rounded-2xl py-2 px-9 hover:bg-red-400">Register</button>
        </div>

        <div className="flex justify-center">
          <p className="font-semibold">Already have an account? <Link to="/" className="text-blue-700 font-bold"> Login </Link></p>
         </div>
      </form>
      <ToastContainer/>
    </div>
  );
}
export default Register;