// Typewriter effect for the invitation text
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('invitation-text');
    const text = textElement.textContent;
    textElement.textContent = '';
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Adjust speed here
        }
    }
    
    typeWriter();
});

// Function to replace button with an image and text
function replaceButtonWithImage(button, imageSrc, message) {
    button.innerHTML = `<img src="${imageSrc}" alt="Image" style="max-width: 100px; display: block; margin: 0 auto;"><p>${message}</p>`;
}

// Store original button content
const notInterestedButton = document.getElementById('not-interested');
const acceptInvitationButton = document.getElementById('accept-invitation');
const originalNotInterestedContent = notInterestedButton.innerHTML;
const originalAcceptInvitationContent = acceptInvitationButton.innerHTML;

// Event listeners for 'not-interested' button
notInterestedButton.addEventListener('click', function() {
    if (window.opener) {
        window.close();
    } else {
        alert("Thank you for your response. You can close this tab now.");
    }
});

notInterestedButton.addEventListener('mouseover', function() {
    replaceButtonWithImage(this, 'sadfairy.png', 'Awwww, I understand. You may close this tab now');
});

notInterestedButton.addEventListener('mousedown', function() {
    replaceButtonWithImage(this, 'sadfairy.png', 'Awwww, I understand. You may close this tab now');
});

notInterestedButton.addEventListener('mouseleave', function() {
    this.innerHTML = originalNotInterestedContent;
});

// Event listeners for 'accept-invitation' button

acceptInvitationButton.addEventListener('mouseover', function() {
    replaceButtonWithImage(this, 'happyfairy.png', '😊');
});

acceptInvitationButton.addEventListener('mousedown', function() {
    replaceButtonWithImage(this, 'happyfairy.png', '😊');
});

acceptInvitationButton.addEventListener('mouseleave', function() {
    this.innerHTML = originalAcceptInvitationContent;
});

acceptInvitationButton.addEventListener('click', function() {
    // Display confetti
    confetti();
    setTimeout(function() {
        window.location.href = 'https://chat.whatsapp.com/I18hDa06Muv9MSKPlehHUx';
    }, 2000); // Delay to show the confetti before redirect
});
