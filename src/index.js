
let todos = [
    {
        completed: false,
        description: "Take Jim to the hair salon"
    },
    {
        completed: true,
        description: "Drop off wedding invitation at mailbox"
    },
    {
        completed: false,
        description: "Pick up the cake"
    },
    {
        completed: false,
        description: "Call the caterers"
    }
];

function renderTodoApp() {
    let app = document.querySelector("#app");
    let h1 = document.createElement("h1");
    // your code here

    let ul = document.createElement("ul");
    ul.style = "list-style-type: none";

    for (let i = 0; i < todos.length; i++) {

        let li = document.createElement("li");

        let input = `<input type="checkbox">${todos[i].description}</input>`;
            if (todos[i].completed === true) {
                input = `<input type="checkbox" checked>${todos[i].description}</input>`;
            }

        ul.appendChild(li);

        li.innerHTML += input;
    }

    h1.innerText = "Todo List";

    app.appendChild(h1);
    // and maybe some here
    app.appendChild(ul);
}

renderTodoApp();