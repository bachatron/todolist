const {createDialogBox} = require ('./dialogbox.js');
const {createProjectPage, taskDialogBoxText} = require ('./template-literals.js');
const {Project} = require ('./classes.js');

let projectsList = [];

function createProject (title, description, dueDate, priority) {
    createDialogBox()
    .then(({ title, description, dueDate, priority }) => {
        const newProject = new Project(title, description, dueDate, priority);
        const navbar = document.getElementById('navbar');
        const button = document.createElement('button');
        button.classList.add('project-button');
        button.innerText = `${title}`;
        button.addEventListener('click', function () {
            const taskBox = document.getElementById('task-box');
            taskBox.innerHTML = ''
            
            const temp = document.createElement('div');
            temp.innerHTML = createProjectPage(newProject);
            const newProjectPage = temp.firstElementChild;
        
            taskBox.appendChild(newProjectPage);
            const newTaskButton = document.getElementById('add-tsk-button');
            newTaskButton.addEventListener('click', function () {
                const div = document.createElement('div');
                div.innerHTML = taskDialogBoxText;
            })

        });
        navbar.appendChild(button);

        projectsList.push(newProject);
    })
    .catch((err) => {
      console.log("Dialog dismissed:", err);
    });
}

function deleteProject (id) {
    this.projectsList = !projectsList.filter(function (project) {
        project.id === id;
    });
}

module.exports = {
    createProject,
    deleteProject,
    projectsList,
  };