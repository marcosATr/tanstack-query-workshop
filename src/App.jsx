import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DoubleMount from "./DoubleMount";
import DelayedDoubleMount from "./DelayedDoubleMount";
import DependentQueriesExercise from "./DependentQueriesExercise";
import Mutations from "./Mutations";
import InvalidateQuery from "./InvalidateQuery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <nav>
                <ul>
                  <li>
                    <Link to="/double-mount">Double Mount</Link>
                  </li>
                  <li>
                    <Link to="/delayed-double-mount">Delayed Double Mount</Link>
                  </li>
                  <li>
                    <Link to="/dependent-queries">Dependent Queries Exercise</Link>
                  </li>
                  <li>
                    <Link to="/mutations">Mutations Example</Link>
                  </li>
                  <li>
                    <Link to="/invalidate-query">Invalidate Query Example</Link>
                  </li>
                </ul>
              </nav>
            </>
          }
        />
        <Route path="/double-mount" element={<DoubleMount />} />
        <Route path="/delayed-double-mount" element={<DelayedDoubleMount />} />
        <Route path="/dependent-queries" element={<DependentQueriesExercise />} />
        <Route path="/mutations" element={<Mutations />} />
        <Route path="/invalidate-query" element={<InvalidateQuery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
