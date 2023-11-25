const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);


function validateForm() {
    var emailInput = document.getElementById('w3lSender');
    if (!emailInput.checkValidity()) {
        alert("Please enter a valid email address.");
        return false;
    }
    return true;
}

function showAlert() {
    if (validateForm()) {
        alert("Your message has been sent.");
        document.getElementById('w3lName').value = "";
        document.getElementById('w3lSender').value = "";
        document.getElementById('w3lSubject').value = "";
        document.getElementById('w3lMessage').value = "";
    }
}