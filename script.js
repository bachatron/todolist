function Task (title, description = 'No description', dueDate = null, priority = 'Normal', completed = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
}

Task.prototype.setCompleted = function () {
    this.completed = !this.completed;
    console.log(this.completed);
}

function Project(title) {
    this.title = title;  // Project title
    this.taskNumber = 0;
    this.taskList = [];
}

Project.prototype.newTask = function (baseTitle, description, dueDate, priority, completed) {
    // Create a unique task title by appending the taskNumber to the baseTitle
    const uniqueTitle = `${baseTitle} - Task ${this.taskNumber + 1}`;

    // Create a new task with the unique title and provided parameters
    const newTask = new Task(uniqueTitle, description, dueDate, priority, completed);
    
    // Add the task to the task list
    this.taskList.push(newTask);

    // Increment the task number to ensure the next task has a unique title
    this.taskNumber++;
}

// Usage example
const myProject = new Project('My First Project');

// Adding tasks to the project
myProject.newTask('Buy groceries', 'Get milk, eggs, and bread', '2024-07-04', 'High', false);
myProject.newTask('Clean the house', 'Vacuum and dust the living room', '2024-07-05', 'Medium', false);

console.log(myProject.taskList);