import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp, Tweets } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Tweets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
