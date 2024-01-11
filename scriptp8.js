document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Check if there's a saved theme preference in local storage
    const savedTheme = localStorage.getItem('darkMode');

    // Apply the saved theme or default to light mode
    if (savedTheme === 'dark') {
        enableDarkMode();
        darkModeToggle.checked = true;
    } else {
        disableDarkMode();
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            enableDarkMode();
            localStorage.setItem('darkMode', 'dark');
        } else {
            disableDarkMode();
            localStorage.setItem('darkMode', 'light');
        }
    });

    function enableDarkMode() {
        document.documentElement.style.setProperty('--background-color', '#1a1a1a');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
    }

    function disableDarkMode() {
        document.documentElement.style.setProperty('--background-color', '#ffffff');
        document.documentElement.style.setProperty('--text-color', '#333333');
    }
});
