function displayItems(data) {
    data.forEach(user => {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${user.userName}</td><td>${user.userPhone}</td><td>${user.userComment}</td>`;
        document.getElementById("usersTable").appendChild(row);
    });
}

fetch('http://localhost:59562/api/users/db')
//fetch('http://192.168.128.206:8080/api/users/db')
    .then(response => response.json())
    .then(data => displayItems(data));