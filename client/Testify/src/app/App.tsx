import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import Layout from "./components/Layout/Layout";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const App: FC = () => {

  const queryClient = new QueryClient()

  return (
    <main className="main">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />}/>
            <Route path="/auth" element={<AuthPage />}/>
          </Route>
        </Routes>
      </QueryClientProvider>
      
    </main>
  )
}

export default App;