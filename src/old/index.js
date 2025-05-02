
const {
    Task,
    Project,
    projectsList,
    createProject,
    deleteProject,
  } = require('./logic.js');
  
require('./styles.css');

const addProjectButton = document.getElementById('new-project');
addProjectButton.addEventListener('click', createProject);


