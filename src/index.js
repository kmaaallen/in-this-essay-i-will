// Select theme
function selectTheme(theme) {
    document.getElementsByClassName('active-theme')[0].classList.remove('active-theme');
    document.getElementById('body').classList.remove(...document.getElementById('body').classList);
    document.getElementById('body').classList.add(theme);
    document.getElementById(theme).classList.add('active-theme');
}

