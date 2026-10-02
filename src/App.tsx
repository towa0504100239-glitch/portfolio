import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Works from "./pages/Works";
import WorkDetail from "./pages/works/WorkDetail";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/works"
          element={<Works />}
        />

        <Route
          path="/works/:slug"
          element={<WorkDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;