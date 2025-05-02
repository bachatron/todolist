const { Project } = require('./classes');

let projectsList = [];

let showingAllProjects = false;

function getShowingAllProjects() {
    return showingAllProjects;
}

function setShowingAllProjects(value) {
    showingAllProjects = value;
}

function createProject({ title, description, dueDate, priority }) {
    const newProject = new Project(title, description, dueDate, priority);
    projectsList.push(newProject);
    return newProject;
}

function deleteProject(id) {
    const index = projectsList.findIndex(p => p.id === id);
    if (index !== -1) {
        projectsList.splice(index, 1);
    }
}

module.exports = { createProject, deleteProject, projectsList, getShowingAllProjects, setShowingAllProjects };
