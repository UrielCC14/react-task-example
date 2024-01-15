import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleChange = (e) => {
    setTittle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (tittle !== "" && description !== "") {
      createTask({
        tittle,
        description,
      });
      setTittle("");
      setDescription("");
    } else {
      alert("Favor de rellenar los campos.");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Create your task</h1>
        <input className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Write your Task."
          onChange={handleChange}
          value={tittle}
        ></input>
        <textarea className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Task Description."
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Save</button>
      </form>
    </div>
  );
}

export default TaskForm;
