const { deleteProject, getShowingAllProjects } = require('./projectController');
const { createStyledProjectCard } = require('./templates');
const { openProjectFormDialog, openTaskDialog } = require('./dialogs');


async function generateProjectPage(project) {
    const projectContainer = document.getElementById("project-page");
    const multiplePages = getShowingAllProjects(); // Use your accessor here

    // Check if this project is already rendered (so we can update in place)
    const existingCard = projectContainer.querySelector(`[data-project-id="${project.id}"]`);
    const newCard = createStyledProjectCard(project);

    if (existingCard) {
        projectContainer.replaceChild(newCard, existingCard); // ⬅️ keeps position
    } else {
        if (!multiplePages) {
            projectContainer.innerHTML = "";
        }
        projectContainer.appendChild(newCard);
    }

    // Setup all buttons and event listeners
    setupListeners(project, newCard);
}

function setupListeners(project, card) {
    const createTaskButton = card.querySelector('#add-task-btn');
    createTaskButton.addEventListener("click", async () => {
        try {
            const taskTitle = await openTaskDialog();
            project.newTask(taskTitle);
            generateProjectPage(project, getShowingAllProjects());
        } catch (err) {
            console.log("Task creation cancelled");
        }
    });

    const deleteButton = card.querySelector("#delete-project-btn");
    deleteButton.addEventListener("click", () => {
        setupDeleteProjectListeners(project);
    });

    const editButton = card.querySelector('#edit-project-btn');
    editButton.addEventListener('click', async () => {
        try {
            const updatedData = await openProjectFormDialog(project);
            Object.assign(project, updatedData);
            generateProjectPage(project, getShowingAllProjects());
        } catch (err) {
            console.log(err);
        }
    });

    setupTaskCheckboxListeners(project, card);
    setupDeleteTaskListeners(project, card);
}

function setupTaskCheckboxListeners(project, container) {
    container.querySelectorAll('.task-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const taskId = parseInt(e.target.dataset.taskId, 10);
            const task = project.tasks.find(t => t.id === taskId);
            if (task) {
                task.changeStatus();
                generateProjectPage(project, getShowingAllProjects());
            }
        });
    });
}

function setupDeleteTaskListeners(project, container) {
    container.querySelectorAll('.delete-task-btn').forEach(button => {
        button.addEventListener('click', () => {
            const taskId = parseInt(button.dataset.taskId, 10);
            project.tasks = project.tasks.filter(t => t.id !== taskId);
            generateProjectPage(project, getShowingAllProjects());
        });
    });
}

function setupDeleteProjectListeners(project) {
    const projectContainer = document.getElementById("project-page");
    const projectCard = projectContainer.querySelector(`[data-project-id="${project.id}"]`);

    deleteProject(project.id); // update data model
    document.getElementById(`${project.id}`).remove(); // remove navbar button
    if (projectCard) projectContainer.removeChild(projectCard); // remove only this card

    // If you're not in "show all", clear everything
    if (!getShowingAllProjects()) {
        projectContainer.innerHTML = "";
    }
}

module.exports = {
    generateProjectPage,
    setupListeners,
    setupTaskCheckboxListeners,
    setupDeleteTaskListeners,
    setupDeleteProjectListeners,
  };