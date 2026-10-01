import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
import Engine from "./engine";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Engine />}>
          <Route index element={<h1>Home</h1>} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
