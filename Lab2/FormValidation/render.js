const usersCont = document.getElementById("usersCont");
const removeAll = document.getElementById("removeAll");

let users = [];

function render() {
    // loop through the array
        // create a span and put username in innerText (give span class)
        // create a span and put age in innerText (give span class)
        // create a button and add event listener to it
    let usernameEle = null;
    let ageEle = null; 
    let deleteBtn = null;
    users.forEach((user) => {
        usernameEle = document.createElement("span");
        usernameEle.className = "big-text";
        usernameEle.innerHTML = user.username;
        ageEle = document.createElement("span");
        ageEle.className = "big-text";
        ageEle.innerHTML = user.age;
        deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("id" , user.id);
        deleteBtn.addEventListener("click" , removeUser);
        deleteBtn.className = "btn";
        deleteBtn.innerText = "Delete";
        usersCont.insertAdjacentElement("beforeend", usernameEle);
        usersCont.insertAdjacentElement("beforeend", ageEle);
        usersCont.insertAdjacentElement("beforeend", deleteBtn);
    });
}

function removeUser(e) {
    console.log(e);
    let removedId = e.target.id;
    // console.log(`element id is ${e.target.id} is deleted Hah just kidding !`);
    console.log(users);
    for (let i = 0, n = users.length; i < n; i++) {
        if(users[i].id == removedId) {
            users.splice(i, 1);
        }
    }

    localStorage.setItem("users" , JSON.stringify(users));
    location.reload();
}

function getUsers() {
    let data = localStorage.getItem("users");
    if(data != null) {
        users = JSON.parse(data);
        console.log(users);
    }
}

removeAll.onclick = () => {
    localStorage.setItem("users" , JSON.stringify([]));
    location.reload();
}

getUsers();
render();