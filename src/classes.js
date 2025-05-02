class Task {
    static taskId = 0;

    constructor(name, done = false) {
        this.id = Task.taskId++;
        this.name = name;
        this.done = done;
    }

    changeStatus() {
        this.done = !this.done;
    }
}

class Project {
    static projectId = 0;

    constructor(title, description, dueDate, priority) {
        this.id = Project.projectId++;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.tasks = [];
    }

    newTask(name) {
        this.tasks.push(new Task(name));
    }

    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
}

module.exports = {Task, Project};