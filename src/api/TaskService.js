import axios from "axios";
import http from "./Httpcommon";
class TaskService {
  getTasks() {
    return http.get("file.json");
  }
  addTask() {
    let headers = {
      Authorization: "token",
      "Content-Type": "multipart/form-data",
    };

    let formData = new FormData();

    formData = {
      task: "task1",
    };

    axios.post("file.json", formData, { headers }).then(() => {
      console.log("It Works");
    });
  }

  login(body) {
    return http.post("/auth/login", body);
  }
}
export default new TaskService();
