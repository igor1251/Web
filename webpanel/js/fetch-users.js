const url = 'http://localhost:59562/api/users/';

function sendDeleteRequest(userID) {
    fetch(url + userID, {
        method: "DELETE",
    });
}

function displayItems(data) {
    data.forEach(user => {
        let row = document.createElement('tr');
        row.id = `${user.userID}`;
        row.innerHTML = `
            <td>
                ${user.userName}
            </td>
            <td>
                ${user.userPhone}
            </td>
            <td>
                ${user.userComment}
            </td>
            <td style="text-align: right;">
                <button class="btn-action btn-search" onclick="localStorage.setItem('userID', ${user.id}); window.location.href='current-user.html'"></button>
                <button class="btn-action btn-delete" onclick="sendDeleteRequest(${user.id});"></button>
            </td>`;
        document.getElementById("usersTable").appendChild(row);
    });
}

fetch(url + "db")
    .then(response => response.json())
    .then(users => displayItems(users))
    .catch(exception => console.log(exception));