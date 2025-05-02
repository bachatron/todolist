// templates.js

// Project Creation Dialog
const projectDialogTemplate = `
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
      <button class="cancel-btn">Cancel</button>
      <button id="create-btn">Create</button>
    </div>
  </div>
`;

// Task Creation Dialog
const taskDialogTemplate = `
  <div class="dialog-box">
    <input type="text" id="task-title" placeholder="Task Name">
    <div class="button-group">
      <button id="cancel-task-btn">Cancel</button>
      <button id="create-task-btn">Create Task</button>
    </div>
  </div>
`;

// Create Single Task Item (if you want to add new tasks dynamically)
function createTaskItemTemplate(task) {
  return `
    <li class="task-item">
      <input type="checkbox" id="task-${task.id}" ${task.done ? 'checked' : ''}>
      <span class="${task.done ? 'done' : ''}">${task.name}</span>
      <button class="delete-task-btn" data-task-id="${task.id}">Delete</button>
    </li>
  `;
}

function createStyledProjectCard(project) {
  const card = document.createElement('div');
  card.classList.add('project-card');
  card.setAttribute('data-project-id', project.id);

  card.innerHTML = `
      <div class="project-header">
          <div class="project-title">${project.title}</div>
          <div class="project-actions">
              <button id="edit-project-btn">Edit</button>
              <button id="delete-project-btn">Delete</button>
              <button id="add-task-btn">+ Task</button>
          </div>
      </div>
      <div class="project-description">${project.description}</div>
      <div class="project-meta">
          Due: ${project.dueDate || 'N/A'} · Priority: ${project.priority || 'N/A'}
      </div>
      <div class="task-list">
          ${project.tasks.map(task => `
              <div class="task-item">
                  <div class="task-left">
                      <input type="checkbox" class="task-checkbox" data-task-id="${task.id}" ${task.done ? 'checked' : ''}>
                      <span class="task-title ${task.done ? 'done' : ''}">${task.name}</span>
                  </div>
                  <button class="delete-task-btn" data-task-id="${task.id}">Delete</button>
              </div>
          `).join('')}
      </div>
  `;

  return card;
}

module.exports = {
  projectDialogTemplate,
  taskDialogTemplate,
  createTaskItemTemplate,
  createStyledProjectCard,
};
