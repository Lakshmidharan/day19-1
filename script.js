let state = {
    india: ['Tamilnadu', 'Haryana', 'Telungana', 'Kerala', 'Karnataka'],
    australia: ['Melborn', 'Sydney', 'South Australia'],
    usa: ['Alabama', 'Delaware', 'California', 'Washington'],
    canada: ['Alberta', 'British Columbia', 'Northwest Territories']
}

document.getElementById('country').addEventListener('change', loadState);

document.getElementById('dosaForm').addEventListener('submit', submitForm);


let dosaCheckBoxError = document.getElementById('menuCheckbox').querySelector('input');
dosaCheckBoxError.setCustomValidity("Select atleast three dosa");

function loadState(e) {
    clearState();
    let stateDOM = document.getElementById('state');
    state[e.target.value].forEach(stateName => {
        let option = document.createElement('option');
        option.value = stateName.toLowerCase();
        option.innerHTML = stateName;
        stateDOM.appendChild(option);
    });
    stateDOM.focus();
}

function clearState() {
    let stateDOM = document.getElementById('state');
    stateDOM.innerHTML = '';
    let defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.innerHTML = 'Select..';
    defaultOption.selected = true;
    defaultOption.disabled = true;
    stateDOM.appendChild(defaultOption)
}

function checkdosa() {
    let selecteddosa = document.querySelector('#menuCheckbox').querySelectorAll('input:checked');
    let dosaCheckBoxError = document.getElementById('menuCheckbox').querySelector('input');
    if (selecteddosa.length > 1) {
        console.log(selecteddosa.length)
        dosaCheckBoxError.setCustomValidity("");
        return true;
    } else {
        dosaCheckBoxError.setCustomValidity("Select atleast Three Dosa");
        console.log(selecteddosa.length)
        return false;
    }
}

function submitForm(event) {

    event.preventDefault();
    let details = {
        firstName: document.getElementById('fname').value,
        lastName: document.getElementById('lname').value,
        address: document.getElementById('address').value,
        pincode: document.getElementById('pincode').value,
        gender: document.querySelector('.gender input:checked').value,
        country: document.getElementById('country').value,
        state: document.getElementById('state').value,
        dosa: []
    }
    let dosasChecked = document.getElementById('menuCheckbox').querySelectorAll('input:checked');
    dosasChecked.forEach(dosa => {
        details.dosa.push(dosa.value)
    })

    addDetails(details);
    event.target.reset();
    clearState();
    return false;

}


function addDetails(details) {
    let table = document.getElementById('table').querySelector('table');
    let row = table.insertRow(-1);
    let col = row.insertCell(-1);
    col.innerHTML = details.firstName;
    col = row.insertCell(-1);
    col.innerHTML = details.lastName;
    col = row.insertCell(-1);
    col.innerHTML = details.address;
    col = row.insertCell(-1);
    col.innerHTML = details.pincode;
    col = row.insertCell(-1);
    col.innerHTML = details.gender;
    col = row.insertCell(-1);
    col.innerHTML = details.dosas;
    col = row.insertCell(-1);
    col.innerHTML = details.country;
    col = row.insertCell(-1);
    col.innerHTML = details.state;
}