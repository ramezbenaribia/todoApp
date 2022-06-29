import React, { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { TaskContext } from "../../Home";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Checkbox from "@mui/material/Checkbox";

import "./Card.css";
import { updateTask, deleteTask } from "../../../../redux/taskSlice";

const Card = ({ task }) => {
  const [checked, setchecked] = useState(task.checked);
  const dispatch = useDispatch();
  const tasksList = useSelector((state) => state.value);

  const removeTask = (e) => {
    let data = tasksList;
    const index = data.findIndex((item) => item.title === task.title);

    dispatch(deleteTask(index));
  };
  const subimtHandler = (e) => {
    // setchecked(!checked);
    // let tasksList = JSON.parse(localStorage.getItem("tasks"));
    let data = tasksList;
    const index = data.findIndex((item) => item.title === task.title);
    console.log(index);
    // data[index].checked = !data[index].checked;
    // localStorage.setItem("tasks", JSON.stringify(tasksList));

    console.log(tasksList);
    // console.log("index");
    // console.log(index);
    // console.log("body");
    dispatch(updateTask(index));
  };
  useEffect(() => {
    // console.log("tasksList");
    // console.log(tasksList);
  }, []);
  return (
    <>
      {/* // <form onSubmit={subimtHandler}> */}
      <div className="card">
        <Checkbox
          checked={task.checked}
          onChange={subimtHandler}
          inputProps={{ "aria-label": "controlled" }}
        />

        <h5>
          {task.title} {task.checked}
        </h5>
        <button className="btn" onClick={removeTask}>
          <MdDelete className="delete_button" />
        </button>
      </div>
      {/* // </form> */}
    </>
  );
};

export default Card;
