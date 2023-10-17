const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const resultDiv = document.getElementById('result');

button1.addEventListener('click', () => {
    fetchData(1);
});

button2.addEventListener('click', () => {
    fetchData(2);
});

function fetchData(arg) {
    fetch(`/api/data/${arg}`)
        .then((response) => response.json())
        .then((data) => {
           
            resultDiv.textContent = JSON.stringify(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}