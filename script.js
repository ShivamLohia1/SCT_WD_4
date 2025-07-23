const form = document.getElementById("task-form");
    const taskList = document.getElementById("task-list");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const taskInput = document.getElementById("task-input");
      const taskDatetime = document.getElementById("task-datetime");

      const taskText = taskInput.value.trim();
      const taskTime = taskDatetime.value;

      if (!taskText) return;

      const li = document.createElement("li");

      const taskInfo = document.createElement("div");
      taskInfo.className = "task-info";
      taskInfo.innerHTML = `<strong>${taskText}</strong><br><small>${taskTime}</small>`;

      const buttons = document.createElement("div");
      buttons.classList.add("task-buttons");

      const completeBtn = document.createElement("button");
      completeBtn.innerHTML = "✔";
      completeBtn.title = "Mark Complete";
      completeBtn.onclick = () => {
        taskInfo.classList.toggle("completed");
      };

      const editBtn = document.createElement("button");
      editBtn.innerHTML = "✏";
      editBtn.title = "Edit Task";
      editBtn.onclick = () => {
        const newTask = prompt("Edit your task:", taskText);
        if (newTask && newTask.trim()) {
          taskInfo.innerHTML = `<strong>${newTask}</strong><br><small>${taskTime}</small>`;
        }
      };

      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "🗑";
      deleteBtn.title = "Delete Task";
      deleteBtn.onclick = () => li.remove();

      buttons.append(completeBtn, editBtn, deleteBtn);
      li.append(taskInfo, buttons);
      taskList.appendChild(li);

      form.reset();
    });