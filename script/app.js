let yearEl = document.querySelectorAll('.year')

let body = document.body
let themeBtn = document.querySelector('#themeButton')
let themeText = document.querySelector('.theme-text')
let savedTheme = localStorage.getItem('theme')

if (savedTheme) {
    body.className = savedTheme
}
let themes = ['light', 'dark']


let count = (savedTheme !== undefined || null) ? themes.indexOf(savedTheme) : 0;

themeBtn.onclick = function () {
    count++
    let selected
    if (count === 0) {
        selected = themes[0]
    }
    if (count === 1) {
        selected = themes[1]
    }
    if (count > 1) {
        selected = themes[0]
        count = 0
    }
    localStorage.setItem('theme', selected)
    body.className = selected
    themeText.textContent = selected.toUpperCase()
}

function showDate() {
    let today = new Date();
    //create an object first to indicate what values you want to output
    let options = {
        day: "numeric",
        month: "short",
    }
    let year = today.getFullYear()
    //indicate the language you want it in first then use the options object for your values
    let sDay = today.toLocaleDateString("en-US", options) + ' ' + year;
    return sDay
}
Array.from(yearEl).forEach(el => el.textContent = showDate()) 
