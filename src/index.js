
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

    app.appendChild(ul);

    let form = document.querySelector("#form");
    let button = document.querySelector("#submit-button");

    form.onsubmit = (e) => {
        e.preventDefault();
        let li = document.createElement("li");
        let submission = document.querySelector("#form-input").value;
        let input = `<input type="checkbox">${submission}</input>`;

        li.innerHTML += input;
        ul.appendChild(li);

        document.querySelector("#form-input").value = "";
    }



}

renderTodoApp();