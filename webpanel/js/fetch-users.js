// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
for (let i = 0; i < 10; i++)
{
    let row = document.createElement('tr');
    row.innerHTML = "<td>Иванов Анатолий Викторович</td><td>89610037151</td><td>Тест</td>";
    document.getElementById("usersTable").appendChild(row);
}