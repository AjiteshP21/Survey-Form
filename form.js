document.getElementById('survey-form').addEventListener('submit', function(event) {
        // Prevent form submission
        event.preventDefault();

    // Validate form fields
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('number').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var interests = document.querySelectorAll('input[name="interests"]:checked');
    var comments = document.getElementById('comments').value;

    // Perform validation
    if (name === '' || email === '' || age === '' || gender === null || interests.length === 0 ) {
        alert('Please fill out all fields');
    return;
            }

    // If all fields are filled, submit the form
    this.submit();
        });