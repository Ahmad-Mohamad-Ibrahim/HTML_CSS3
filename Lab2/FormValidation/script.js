const username = document.getElementById("username");
const age = document.getElementById("age");
const submitBtn = document.getElementById("submitBtn");

let mainForm = document.querySelector("#container");
let users = [];
let id = 0;
function getId() {
    let data = localStorage.getItem("users");
    if (data == null) {
        return 0;
    }
    else {
        users = JSON.parse(data);
        return ((users.at(-1).id) + 1);
    }
}

mainForm.onsubmit = e => {
    e.preventDefault();
    let usernameValue = username.value;
    let ageValue = Number(age.value);
    // clear fields
    username.value = '';
    age.value = '';
    // add to users array {id: id,username: usernameValue, age: ageValue }
    users.push({"id":id,"username":usernameValue,"age":ageValue });
    id++;
    // save to local storage JSON.stringfy()
    localStorage.setItem("users" , JSON.stringify(users));
    console.log(JSON.stringify(users));
    // go to users.html
    location.assign("./users.html");
};

function main() {
    id = getId();
    console.log(`id is : ${id}`);
}

main();

