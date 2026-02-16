import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import Pembayaran from "./pages/Pembayaran";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/pembayaran/:uuid_pcb" element={<Pembayaran/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;