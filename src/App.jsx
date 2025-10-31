import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Task2 from "./Task2";
import Task3 from "./Task3";
import DoubleMount from "./DoubleMount";
import DelayedDoubleMount from "./DelayedDoubleMount";
import DependentQueriesExercise from "./DependentQueriesExercise";
import Mutations from "./Mutations";

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
                    <Link to="/task3">Task 3</Link>
                  </li>
                  <li>
                    <Link to="/dependent-queries">Dependent Queries Exercise</Link>
                  </li>
                  <li>
                    <Link to="/mutations">Mutations Example</Link>
                  </li>
                </ul>
              </nav>
            </>
          }
        />
        <Route path="/double-mount" element={<DoubleMount />} />
        <Route path="/delayed-double-mount" element={<DelayedDoubleMount />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="/dependent-queries" element={<DependentQueriesExercise />} />
        <Route path="/mutations" element={<Mutations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
