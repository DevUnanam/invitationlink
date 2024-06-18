// user is prompted to close the tab
document.getElementById('not-interested').addEventListener('click', function() {
    if (window.opener) {
        window.close();
    } else {
        alert("Thank you for your response. You can close this tab now.");
    }
});

// user gets redirected to the WhatsApp group
document.getElementById('accept-invitation').addEventListener('click', function() {
    window.location.href = 'https://chat.whatsapp.com/I18hDa06Muv9MSKPlehHUx';
});

// Change button content on click
document.getElementById('not-interested').addEventListener('mousedown', function() {
    this.innerHTML = "😢";
});

document.getElementById('not-interested').addEventListener('mouseup', function() {
    this.innerHTML = "Tap here if not interested";
});

document.getElementById('accept-invitation').addEventListener('mousedown', function() {
    this.innerHTML = "😊";
});

document.getElementById('accept-invitation').addEventListener('mouseup', function() {
    this.innerHTML = "Tap here if you accept my invitation";
});
