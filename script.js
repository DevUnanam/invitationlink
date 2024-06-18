document.getElementById('not-interested').addEventListener('click', function() {
    if (window.opener) {
        window.close();
    } else {
        alert("Thank you for your response. You can close this tab now.");
    }
});

document.getElementById('accept-invitation').addEventListener('click', function() {
    window.location.href = 'https://chat.whatsapp.com/I18hDa06Muv9MSKPlehHUx';
});
