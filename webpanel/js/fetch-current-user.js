const certificatesUrl = 'http://localhost:59562/api/certificate/';
const usersUrl = 'http://localhost:59562/api/users/';

async function sendDeleteCertificateRequest(certificateID) {
    await fetch(certificatesUrl + certificateID, {
        method: "DELETE",
    })
    .catch(exception => console.log(exception));
}

function onCheckBoxClicked(ID) {
    let checkBox = document.getElementById(ID);
    let deleteButton = document.getElementById("deleteCertificatesButton");
    if (checkBox.checked) {
        deleteButton.className = "btn btn-primary";
        deleteButton.addEventListener("click", deleteButtonListener);
    }
    else {
        deleteButton.className = "btn btn-secondary";
        deleteButton.removeEventListener("click", deleteButtonListener);
    }
}

var deleteButtonListener = async function() {
    let usersTable = document.getElementById('currentUserCertInfoTable');
    let checkBoxCollection = usersTable.getElementsByTagName('input');
    for (let i = 0; i < checkBoxCollection.length; i++) {
        if (checkBoxCollection[i].checked) {
            await sendDeleteCertificateRequest(checkBoxCollection[i].id);
        }
    }
    localStorage.setItem('userID', selectedUserId);
    window.location.reload();
}

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
            <td align="center">
                <input type="checkbox" id="${certificate.id}" onclick="onCheckBoxClicked(${certificate.id})">
            </td>
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
fetch(usersUrl + selectedUserId)
    .then(response => response.json())
    .then(currentUserData => {
        displayUserInfo(currentUserData);
        if (currentUserData.certificateList != null)
        {
            displayCertificatesInfo(currentUserData.certificateList);
        }
    })
    .catch(exception => console.log(exception));