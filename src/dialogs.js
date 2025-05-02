const { projectDialogTemplate, taskDialogTemplate } = require('./templates');

function openProjectFormDialog(project = null) {
    return new Promise((resolve, reject) => {
        const container = document.getElementById('container');
        const overlay = document.createElement('div');
        overlay.classList.add('modal-overlay');
        overlay.innerHTML = projectDialogTemplate;
        container.appendChild(overlay);

        const titleInput = overlay.querySelector('#project-title');
        const descInput = overlay.querySelector('#project-desc');
        const dateInput = overlay.querySelector('#project-date');
        const priorityInput = overlay.querySelector('#project-priority');

        // Pre-fill if editing
        if (project) {
            titleInput.value = project.title;
            descInput.value = project.description;
            dateInput.value = project.dueDate;
            priorityInput.value = project.priority;
            overlay.querySelector('#create-btn').textContent = 'Save Changes';
        }

        overlay.querySelector('.cancel-btn').addEventListener('click', () => {
            container.removeChild(overlay);
            reject('Cancelled');
        });

        overlay.querySelector('#create-btn').addEventListener('click', () => {
            const title = titleInput.value.trim();
            const dueDate = dateInput.value;
        
            const year = parseInt(dueDate.split("-")[0], 10);
            if (!title) {
                alert('Please enter a title.');
                return;
            }
        
            if (!dueDate || year < 2020 || year > 2100) {
                alert('Please enter a realistic due date (between 2020 and 2100).');
                return;
            }
        
            const updated = {
                title,
                description: descInput.value.trim(),
                dueDate,
                priority: priorityInput.value
            };
            container.removeChild(overlay);
            resolve(updated);
        });
        
    });
}

function openTaskDialog () {
    return new Promise ((resolve, reject) => {
        const container = document.getElementById("container");
        const overlay = document.createElement('div');
        overlay.classList.add('modal-overlay');
        overlay.innerHTML = taskDialogTemplate;
        container.appendChild(overlay);

        overlay.querySelector("#cancel-task-btn").addEventListener('click', () => {
            container.removeChild(overlay);
            reject('Cancelled');
        });

        overlay.querySelector("#create-task-btn").addEventListener("click", () => {
           const title = overlay.querySelector("#task-title");
           if (title) {
            container.removeChild(overlay);
            resolve(title.value.trim());
        } else {
            alert('Please enter a title.');
        }
        })

    })
}


module.exports = { openProjectFormDialog, openTaskDialog };