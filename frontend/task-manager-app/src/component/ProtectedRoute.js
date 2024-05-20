import "./App.css";
import ViewPage from "./component/ViewPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoardView from "./component/BoardView";
import ListView from "./component/ListView";
import CalendarView from "./component/CalendarView";
import Login from "../src/component/Login";
import Register from "./component/Register";
import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <ViewPage view={<ListView />} index={1} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ListView"
            element={
              <ProtectedRoute>
                <ViewPage view={<ListView />} index={1} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Board"
            element={
              <ProtectedRoute>
                <ViewPage index={3} view={<BoardView />} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Calendar"
            element={
              <ProtectedRoute>
                <ViewPage index={2} view={<CalendarView />} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
