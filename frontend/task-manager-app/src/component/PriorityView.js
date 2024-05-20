import "./PriorityView.css";
import axios from "axios";
import { useEffect, useState } from "react";
import TaskListRow from "./TaskListRow";

export default function PriorityView() {
  const [lowPriorityTasks, setLowPriorityTasks] = useState([]);
  const [mediumPriorityTasks, setMediumPriorityTasks] = useState([]);
  const [highPriorityTasks, setHighPriorityTasks] = useState([]);

  const getTasks = async () => {
    const { data } = await axios.get("http://localhost:3002/api/tasks");
    if (data.success === true && data.data.length > 0) {
      const lowPriority = data.data.filter((task) => task.priority === "Low");
      const mediumPriority = data.data.filter(
        (task) => task.priority === "Medium"
      );
      const highPriority = data.data.filter((task) => task.priority === "High");

      setLowPriorityTasks(lowPriority);
      setMediumPriorityTasks(mediumPriority);
      setHighPriorityTasks(highPriority);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div id="PriorityView">
      <h2>Priority View</h2>
      <div className="priority-tables">
        <div className="priority-table">
          <h3>Low Priority</h3>
          <table>
            <thead>
              {/* <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Due Date</th>
                <th>Time</th>
                <th>Description</th>
                <th>Priority</th>
              </tr> */}
            </thead>
            <tbody>
              {lowPriorityTasks.map((task, index) => (
                <TaskListRow key={index} {...task} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="priority-table">
          <h3>Medium Priority</h3>
          <table>
            <thead>
              {/* <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Due Date</th>
                <th>Time</th>
                <th>Description</th>
                <th>Priority</th>
              </tr> */}
            </thead>
            <tbody>
              {mediumPriorityTasks.map((task, index) => (
                <TaskListRow key={index} {...task} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="priority-table">
          <h3>High Priority</h3>
          <table>
            <thead>
              {/* <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Due Date</th>
                <th>Time</th>
                <th>Description</th>
                <th>Priority</th>
              </tr> */}
            </thead>
            <tbody>
              {highPriorityTasks.map((task, index) => (
                <TaskListRow key={index} {...task} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
