document.getElementById('fetchButton').addEventListener('click', fetchData);

function fetchData() {
    fetch('http://localhost:8080/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

function displayData(data) {
    const container = document.getElementById('dataContainer');
    container.innerHTML = ''; // Clear previous data
    data.forEach(user => {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `<h2>${user.id}</h2><p>${user.name}</p>`;
        container.appendChild(div);
    });
}
