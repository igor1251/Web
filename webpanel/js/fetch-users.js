const url = 'http://localhost:59562/api/users/';

async function sendDeleteUserRequest(userID) {
    await fetch(url + userID, {
        method: "DELETE",
    })
    .catch(exception => console.log(exception));
}

var deleteButtonListener = async function() {
    let usersTable = document.getElementById('usersTable');
    let checkBoxCollection = usersTable.getElementsByTagName('input');
    for (let i = 0; i < checkBoxCollection.length; i++) {
        if (checkBoxCollection[i].checked) {
            await sendDeleteUserRequest(checkBoxCollection[i].id);
        }
    }
    window.location.reload();
}

function onSearchUserClicked(userID) {
    localStorage.setItem('userID', userID); 
}

function onCheckBoxClicked(ID) {
    let checkBox = document.getElementById(ID);
    let deleteButton = document.getElementById("deleteUsersButton");
    if (checkBox.checked) {
        deleteButton.className = "btn btn-primary";
        deleteButton.addEventListener("click", deleteButtonListener);
    }
    else {
        deleteButton.className = "btn btn-secondary";
        deleteButton.removeEventListener("click", deleteButtonListener);
    }
}

function displayItems(data) {
    data.forEach(user => {
        let row = document.createElement('tr');
        row.id = `${user.userID}`;
        row.innerHTML = `
            <td align="center">
                <input type="checkbox" id=${user.id} onclick="onCheckBoxClicked(${user.id})">
            </td>
            <td>
                <a href="current-user.html" onclick="onSearchUserClicked(${user.id});">
                    ${user.userName}
                </a>
            </td>
            <td>
                ${user.userPhone}
            </td>
            <td>
                ${user.userComment}
            </td>`;
        document.getElementById("usersTable").appendChild(row);
    });
}

fetch(url + "db")
    .then(response => response.json())
    .then(users => displayItems(users))
    .catch(exception => console.log(exception));