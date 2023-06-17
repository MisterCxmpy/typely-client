// App.js
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { WordsContainer } from "./components";
import { Navbar } from "./layouts";
import { Home } from "./pages";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/practice" element={<WordsContainer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
