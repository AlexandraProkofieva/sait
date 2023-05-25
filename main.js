const themeButton = document.querySelector('#theme-button');

const savedTheme = localStorage.getItem('theme');


if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
  if (savedTheme === 'dark') {
    themeButton.checked = true;
  }
}


themeButton.addEventListener('change', () => {

  const theme = themeButton.checked ? 'dark' : 'light';

  document.documentElement.setAttribute('data-theme', theme);

  localStorage.setItem('theme', theme);
