import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SignUp, Tweets } from "./pages";
import { AuthProvider, useAuth } from "./contexts";

function PrivateRoute({ children }) {
  const { isLogged } = useAuth();

  if (!isLogged) return <Navigate to="/sign-up" replace />;

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Tweets />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
