import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import Layout from "./components/Layout/Layout";

const App: FC = () => {

  

  return (
    <main className="main">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}/>
          <Route path="/auth" element={<AuthPage />}/>
        </Route>
      </Routes>
    </main>
  )
}

export default App;