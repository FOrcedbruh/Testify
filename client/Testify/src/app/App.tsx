import { FC, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import Layout from "./components/Layout/Layout";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import TestPage from "./pages/TestPage/TestPage";
import { useNotification } from "./zustand/useNotification";
import { Notification } from "./components/Notification/Notification";
import { AnimatePresence } from "framer-motion";



const App: FC = () => {

  const queryClient = new QueryClient()

  const [readyToTest, setReadyToTest] = useState<boolean>(false)

  const { notification } = useNotification()

  return (
    <main className="main">
      <AnimatePresence>
        {notification?.text && <Notification status={notification.status}/>}
      </AnimatePresence>
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