// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
for (let i = 0; i < 5; i++)
{
    let row = document.createElement('tr');
    row.innerHTML = "<td>192.168.34.56</td><td>DESKTOP-0SER98T</td><td>443</td>";
    document.getElementById("usersTable").appendChild(row);
}