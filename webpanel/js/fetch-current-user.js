const url = 'http://localhost:59562/api/users/';

function displayUserInfo(userInfo) {
    let row = document.createElement('tr');
    row.innerHTML = `
        <td>
            ${userInfo.userName}
        </td>
        <td>
            ${userInfo.userPhone}
        </td>
        <td>
            ${userInfo.userComment}
        </td>`;
    document.getElementById('currentUserPersonalInfoTable').appendChild(row);
}

function displayCertificatesInfo(certificatesList) {
    certificatesList.forEach(certificate => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${certificate.certificateHash}
            </td>
            <td>
                ${certificate.algorithm}
            </td>
            <td>
                ${certificate.startDate}
            </td>
            <td>
                ${certificate.endDate}
            </td>`;
        document.getElementById('currentUserCertInfoTable').appendChild(row);
    });
}

var selectedUserId = localStorage.getItem('userID');
localStorage.clear();
fetch(url + selectedUserId)
    .then(response => response.json())
    .then(currentUserData => {
        displayUserInfo(currentUserData);
        if (currentUserData.certificateList != null)
        {
            displayCertificatesInfo(currentUserData.certificateList);
        }
    })
    .catch(exception => console.log(exception));