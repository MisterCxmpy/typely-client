// App.js
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { WordsContainer } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WordsContainer />} />
    </Routes>
  );
}

export default App;
