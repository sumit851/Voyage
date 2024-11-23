import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout children={<p>Home Page</p>} />} />
        <Route
          path="/search"
          element={<Layout children={<p>search Page</p>} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
