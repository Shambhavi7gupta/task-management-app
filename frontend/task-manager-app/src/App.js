import "./App.css";
import ViewPage from "./component/ViewPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoardView from "./component/BoardView";
import ListView from "./component/ListView";
import CalendarView from "./component/CalendarView";
import Login from "../src/component/Login";
import Register from "./component/Register";
import PriorityView from "./component/PriorityView";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Add a default route or a protected route here */}
          <Route path="*" element={<Login />} />
          <Route
            path="/"
            element={<ViewPage view={<ListView />} index={1} />}
          />
          <Route
            path="/ListView"
            element={<ViewPage view={<ListView />} index={1} />}
          />
          <Route
            path="/Board"
            element={<ViewPage index={3} view={<BoardView />} />}
          />
          <Route
            path="/PriorityView"
            element={<ViewPage index={3} view={<PriorityView />} />}
          />
          <Route
            path="/Calendar"
            element={<ViewPage index={2} view={<CalendarView />} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
