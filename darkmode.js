document.addEventListener('DOMContentLoaded', () => {
let darkmode = localStorage.getItem('darkmode') 
const cord = document.querySelector('.cord');
if (!cord) {
    console.warn("element with class 'cord' not found."); 
    return;
}

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
};

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.removeItem('darkmode');
};

if (darkmode === "active") enableDarkmode();

cord.addEventListener('click', () => {
    cord.classList.add('pulled');
    setTimeout(() => {
        cord.classList.remove('pulled');
    }, 200);

    const isDark = document.body.classList.contains('darkmode');
    isDark ? disableDarkmode() : enableDarkmode();
  });
});
