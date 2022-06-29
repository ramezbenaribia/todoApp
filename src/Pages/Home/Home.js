import React, { createContext, useEffect, useRef, useState } from "react";
import Card from "./Components/Card/Card";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import "./Home.css";
import { addTask } from "../../redux/taskSlice";

export const TaskContext = createContext();

const Home = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const tasksList = useSelector((state) => state.value);

  // const [tasksList, settasksList] = useState([
  //   {
  //     title: "task 1",
  //     checked: false,
  //   },
  //   {
  //     title: "task 2",
  //     checked: false,
  //   },
  //   {
  //     title: "task 3",
  //     checked: false,
  //   },
  // ]);

  const form = useRef();
  const subimtHandler = (e) => {
    setTask("");
    e.preventDefault();
    const checked = false;
    const body = {
      title: task,
      checked,
    };
    dispatch(addTask(body));
  };
  useEffect(() => {
    console.log("tasksList1");
    console.log(tasksList);
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <form className="task-form" ref={form} onSubmit={subimtHandler}>
            <div className="form-group">
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="form-control"
                placeholder="Enter your Task"
              />
            </div>

            <button type="submit" className="btn  Add-btn">
              Add
            </button>
          </form>
        </div>
        <TaskContext.Provider value={tasksList}>
          {tasksList.map((task, index) => (
            <Card className="row" key={index} task={task} />
          ))}
        </TaskContext.Provider>
      </div>
    </>
  );
};

export default Home;
