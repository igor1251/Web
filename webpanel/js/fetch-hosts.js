for (let i = 0; i < 5; i++)
{
    let row = document.createElement('tr');
    row.innerHTML = `
        <td>
            192.168.34.56
        </td>
        <td>
            DESKTOP-0SER98T
        </td>
        <td>
            443
        </td>
        <td>
            <form>
                <input type="submit" action="http://localhost:59562/api/hosts/${i}" method="DELETE" value="удалить"></input>
            </form>
        </td>`;
    document.getElementById("hostsTable").appendChild(row);
}