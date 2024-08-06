/*class createTask {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
    
}*/

function createTask (title, description = null, dueDate, priority, notes = null, completed = false) {
    return {
        title,
        description,
        dueDate,
        priority,
        notes,
        completed,

        setValue(key, newValue) {
            this[key] = newValue;
        },

        toggleComplete() {
            this.completed = !this.completed;
        },

        getValue(key) {
            return this[key];
        }
    };
}

const task = createTask("Buy groceries", "Milk, Bread, Eggs", "2024-07-04", "High");

task.title = "new title"

console.log(task.title)
