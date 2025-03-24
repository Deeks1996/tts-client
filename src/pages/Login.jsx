import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../api/supabaseClient";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      toast.error("Login failed",{position:"top-right",autoClose:2000});
    } else {
      toast.success("Login successful!",{position:"top-right",autoClose:2000});
      
      setTimeout(() => {
        navigate("/tts");
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col w-full items-center bg-login min-h-screen p-3">
      <h1 className="text-3xl font-bold mb-4 text-gray-200 mt-16">Login</h1>

      <form className="flex flex-col w-full max-w-md bg-slate-400 p-8 rounded-lg shadow-md space-y-4 border-2 border-gray-200" onSubmit={handleLogin}>
        
        <input type="email" 
        placeholder="Email Address" className="rounded-lg p-2"
        value={email} 
        onChange={(e) => setEmail(e.target.value)} required />

        <input type="password" 
        placeholder="Password" className="rounded-lg p-2"
        value={password} 
        onChange={(e) => setPassword(e.target.value)} required />

        <div className="flex justify-center">
          <button type="submit" className="bg-green-900 text-white font-bold rounded-2xl py-2 px-9 hover:bg-green-600">Login</button>
        </div>

        <div className="flex justify-center">
          <p className="font-semibold">Don't have an account? <Link to="/register" className="text-blue-700 font-bold"> Sign up </Link></p>
        </div>
      </form>
      <ToastContainer/>
    </div>
  );
}
export default Login;
