let currentSection = 1;

function showSection(section) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach((sec, index) => {
        sec.style.display = (index + 1 === section) ? 'block' : 'none';
    });
}

function nextSection() {
    currentSection++;
    showSection(currentSection);
}

function prevSection() {
    currentSection--;
    showSection(currentSection);
}

function checkAnswer(answer, sectionId, feedbackId) {
    const feedback = document.getElementById(feedbackId);
    if (sectionId === 'section2' && answer === 'b') {
        feedback.textContent = 'Correct! The primary purpose of a firewall is to control incoming and outgoing traffic.';
    } else if (sectionId === 'section3' && answer === 'b') {
        feedback.textContent = 'Correct! Changing default passwords prevents unauthorized access.';
    } else {
        feedback.textContent = 'Incorrect. Please try again.';
    }
}

// Initialize the first section
showSection(currentSection);
