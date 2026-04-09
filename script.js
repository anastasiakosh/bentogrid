// Map DOM nodes
const themeButtons = document.querySelectorAll('.theme-btn');
const rootElement = document.documentElement;

// Event attachment logic
themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Extract payload from dataset
        const selectedTheme = button.getAttribute('data-theme');
        
        // Mutate global state
        rootElement.setAttribute('data-theme', selectedTheme);
    });
});