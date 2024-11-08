import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

const App: FC = () => {

  

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </main>
  )
}

export default App;