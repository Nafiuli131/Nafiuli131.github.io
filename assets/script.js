document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    if(themeToggle) {
      themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
      });
    }
  });
  