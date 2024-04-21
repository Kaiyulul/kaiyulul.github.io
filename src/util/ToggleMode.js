function setMode(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function toggleMode() {
  if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setMode('theme-dark');
    } else if (localStorage.getItem('theme') === 'theme-light') {
      setMode('theme-light')
    }
  } else {
    setMode('theme-dark')
  }
}

module.exports = {
  setMode,
  toggleMode
}