import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TTSPage from "./pages/TTS";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/tts" element=
      {<ProtectedRoute>
          <TTSPage />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App;

