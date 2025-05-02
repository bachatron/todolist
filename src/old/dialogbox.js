const {dialogBoxText} = require ('./template-literals'); 

function createDialogBox() {
    return new Promise((resolve, reject) => {
        const container = document.getElementById("container");

        const overlay = document.createElement("div");
        overlay.classList.add("modal-overlay");

        overlay.innerHTML = dialogBoxText;

        container.appendChild(overlay);

        overlay.querySelector("#cancel-btn").addEventListener("click", () => {
            container.removeChild(overlay);
            reject("User cancelled");
        });

        overlay.querySelector("#create-btn").addEventListener("click", () => {
            const title = overlay.querySelector("#project-title").value.trim();
            const description = overlay.querySelector("#project-desc").value.trim();
            const dueDate = overlay.querySelector("#project-date").value;
            const priority = overlay.querySelector("#project-priority").value;

            if (title) {
                container.removeChild(overlay);
                resolve({ title, description, dueDate, priority });
            } else {
                alert("Please enter a project title.");
            }
        });
    });
}

module.exports = {createDialogBox}; 