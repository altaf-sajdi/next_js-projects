document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (name === "" || email === "" || phone === "") {
        alert('Please fill out all fields.');
    } else {
        alert('Registration Successful!');
    }
});
