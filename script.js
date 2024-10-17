document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
  
    const addTask = () => {
      const taskText = taskInput.value.trim();
  
      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }
  
      const newTask = document.createElement("li");
      newTask.textContent = taskText;
  
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("remove-btn");
      removeButton.addEventListener("click", () => {
        taskList.removeChild(newTask);
      });
  
      newTask.appendChild(removeButton);
      taskList.appendChild(newTask);
  
      taskInput.value = "";
    };
  
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        addTask();
      }
    });
  
    addTask(); // Add an initial task to demonstrate functionality
  });

  document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");
  
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
    const loadTasks = () => {
      tasks.forEach(task => {
        const newTask = document.createElement("li");
        newTask.textContent = task;
  
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");
        removeButton.addEventListener("click", () => {
          taskList.removeChild(newTask);
          removeTask(task);
        });
  
        newTask.appendChild(removeButton);
        taskList.appendChild(newTask);
      });
    };
  
    const addTask = () => {
      const taskText = taskInput.value.trim();
  
      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }
  
      tasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(tasks));
  
      const newTask = document.createElement("li");
      newTask.textContent = taskText;
  
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("remove-btn");
      removeButton.addEventListener("click", () => {
        taskList.removeChild(newTask);
        removeTask(taskText);
      });
  
      newTask.appendChild(removeButton);
      taskList.appendChild(newTask);
  
      taskInput.value = "";
    };
  
    const removeTask = (task) => {
      tasks = tasks.filter(t => t !== task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    };
  
    loadTasks();
  
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        addTask();
      }
    });
  });