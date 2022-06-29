import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [
  {
    title: "task 1",
    checked: false,
  },
  {
    title: "task 2",
    checked: false,
  },
  {
    title: "task 3",
    checked: false,
  },
  {
    title: "task 4",
    checked: false,
  },
  {
    title: "task 5",
    checked: false,
  },
];
export const tasksSlice = createSlice({
  name: "tasksList",
  initialState: { value: initialStateValue },
  reducers: {
    addTask: (state, action) => {
      state.value = [action.payload, ...state.value];
    },
    deleteTask: (state, action) => {
      const index = action.payload;
      console.log(index);
      let data = state.value;
      data.splice(0, 1);
      state.value = [...data];
    },
    updateTask: (state, action) => {
      const index = action.payload;
      let data = state.value;
      data[index].checked = !data[index].checked;
      state.value = [...data];
    },
  },
});

export const { addTask, updateTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
