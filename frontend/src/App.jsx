import { Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import SignUpPage from "./pages/auth/SignUpPage"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/auth/LoginPage"
import { Toaster } from "react-hot-toast"

function App() {
  return <Layout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    <Toaster />
  </Layout>
}

export default App
