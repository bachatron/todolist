const { projectsList, setShowingAllProjects } = require('./projectController');
const { generateProjectPage } = require('./projectHelpers');

function addProjectButton (project) {
    const navbar = document.getElementById("navbar");
    const button = document.createElement("button");

    button.classList.add("project-button");
    button.innerText = project.title;
    button.addEventListener("click", () => {
        setShowingAllProjects(false);
        generateProjectPage(project);
    })
    button.setAttribute("id", `${project.id}`)
    navbar.appendChild(button);
}

function showAllProjects () {
    setShowingAllProjects(true); // Set global flag
    const projectContainer = document.getElementById("project-page");
    projectContainer.innerHTML = "";

    for (const project of projectsList) {
        generateProjectPage(project, true);
    }
}

module.exports = { addProjectButton, showAllProjects };
