const dialogBoxText = `
    <div class="dialog-box">
        <input type="text" id="project-title" placeholder="Project Title">
        <textarea id="project-desc" placeholder="Description"></textarea>
        <input type="date" id="project-date">
        <select id="project-priority">
            <option value="low">Low</option>
            <option value="medium" selected>Medium</option>
            <option value="high">High</option>
        </select>
        <div class="button-group">
            <button id="cancel-btn">Cancel</button>
            <button id="create-btn">Create</button>
        </div>
    </div>
`;

function createProjectPage(project) {
    const taskListHTML = project.tasks.map(task => `
      <li class="task-item">
        <input type="checkbox" id="task-${task.id}" ${task.done ? 'checked' : ''}>
        <span class="${task.done ? 'done' : ''}">${task.name}</span>
        <button class="delete-task-btn" data-task-id="${task.id}">Delete</button>
      </li>
    `).join('');
  
    return `
      <div class="project-page">
        <h2>${project.title}</h2>
        <p><strong>Description:</strong> ${project.description}</p>
        <p><strong>Due Date:</strong> ${project.dueDate}</p>
        <p><strong>Priority:</strong> ${project.priority}</p>
  
        <h3>Tasks</h3>
        <ul class="task-list">
          ${taskListHTML || '<p>No tasks yet!</p>'}
        </ul>
  
        <div class="project-buttons">
          <button id="add-task-btn">Add Task</button>
          <button id="delete-project-btn">Delete Project</button>
        </div>
      </div>
    `;
  }
  

const alertBoxText = `
  <div class="alert-box">
    <p id="alert-p" >Something went wrong!</p>
    <button id="close-alert-btn">Close</button>
  </div>
`;

function createTaskItem(taskName) {
    return `
      <div class="task-item">
        <input type="checkbox" id="task-${taskName}">
        <span class="task-name">${taskName}</span>
        <button class="delete-task-btn">Delete</button>
      </div>
    `;
  }

const taskDialogBoxText = `
  <div class="dialog-box">
    <input type="text" id="task-title" placeholder="Task Name">
    <div class="button-group">
      <button id="cancel-task-btn">Cancel</button>
      <button id="create-task-btn">Create Task</button>
    </div>
  </div>
`;


module.exports = {
    dialogBoxText,
    createProjectPage,
    createTaskItem,
    alertBoxText,
    taskDialogBoxText,
  };
