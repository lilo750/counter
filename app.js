const h2 = document.getElementById('num');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
const toggleBtn = document.querySelector('.dark_mode--toggle')

//adapt our dark mode
let theme = localStorage.getItem('theme');

if (theme === 'dark')  {
  enableDarkMode(); 
}

toggleBtn.addEventListener('click', () => {
  theme = localStorage.getItem('theme');

  if (theme === 'dark') {
    disableDarkMode()
  } else {
    enableDarkMode()
  }
})

function disableDarkMode() {
  toggleBtn.innerHTML = '<i class="fa-regular fa-moon"></i>';
  localStorage.setItem('theme', 'light');
  document.body.classList.remove('dark-mode');
}

function enableDarkMode() {
  toggleBtn.innerHTML = '<i class="fa-regular fa-sun"></i>';
  localStorage.setItem('theme', 'dark');
  document.body.classList.add('dark-mode');
}


let numValue = +(h2.innerText); //return the value of num as an integer

incrementBtn.addEventListener('click', () => {
  h2.innerText = `${++numValue}`
  h2.style.color = `#f57`

  //set our num in localStorage 
  localStorage.setItem('num', numValue)
  //set our color for the number in LocalStorage 
  localStorage.setItem('color', '#f57')
})

decrementBtn.addEventListener('click', () => {
  h2.innerText = `${--numValue}`
  h2.style.color = `#f23`
  
  //set our num in localStorage
  localStorage.setItem('num', numValue)
  //set our color number LocalStorage
  localStorage.setItem('color', '#f23')
})

resetBtn.addEventListener('click', () => {
  h2.innerText = 0;
  numValue = 0;
  h2.style.color = `#000`

  //set our num in localStorage
  localStorage.setItem('num', numValue)
  //set our color number LocalStorage
  localStorage.setItem('color', '#000')
})


//set the num value in dom
const savedNum = localStorage.getItem('num');

//it will return true of not null then assign our numValue to the savedNum in localStorage  then set it into dom
if (savedNum) {
  numValue = +savedNum;
  h2.innerText = numValue;
}

//set the color for the num in the dom
const savedColor = localStorage.getItem('color');
if (savedColor) {
  h2.style.color = savedColor;
}





