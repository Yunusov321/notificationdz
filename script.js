document.getElementById('successBtn').addEventListener('click', function() {
    showNotification('Hello world', 'success');
});

document.getElementById('failBtn').addEventListener('click', function() {
    showNotification('Hello Mr Abdulaziz', 'fail');
});

document.getElementById('warningBtn').addEventListener('click', function() {
    showNotification('Hello Uzbekistan', 'warning');
});