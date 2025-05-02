const { addProjectButton, showAllProjects } = require('./projectView');
const { createProject } = require('./projectController');
const { openProjectFormDialog } = require('./dialogs');

require('./styles.css');

document.getElementById('new-project').addEventListener('click', async () => {
    try {
        const formData = await openProjectFormDialog();
        const project = createProject(formData); // createProject only expects an object
        addProjectButton(project);

    } catch (err) {
        console.log("Dialog cancelled");
    }
});

document.getElementById("show-all").addEventListener("click", showAllProjects)
