import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp, Tweets } from "./pages";
import { AuthProvider } from "./contexts";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<Tweets />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
