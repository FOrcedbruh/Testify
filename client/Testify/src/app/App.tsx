import { FC, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import Layout from "./components/Layout/Layout";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import TestPage from "./pages/TestPage/TestPage";

const App: FC = () => {

  const queryClient = new QueryClient()

  const [readyToTest, setReadyToTest] = useState<boolean>(false)

  return (
    <main className="main">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<Layout readyToTest={readyToTest}/>}>
            <Route path="/" element={<HomePage setReadyToTest={setReadyToTest} readyToTest={readyToTest}/>}/>
            <Route path="/auth" element={<AuthPage />}/>
            <Route path="/test" element={<TestPage />}/>
          </Route>
        </Routes>
      </QueryClientProvider>
      
    </main>
  )
}

export default App;